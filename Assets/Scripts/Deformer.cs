﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
[RequireComponent(typeof(Rigidbody))]
public class Deformer : MonoBehaviour {
    public MeshFilter[] meshes;
    public Collider[] colisores;
    [Range(1.0f, 1000.0f)] public float danoPorBatida = 2.0f;
    [Range(0.1f, 1000.0f)] public float areaDeDeform = 40.0f;
    [Range(0.1f, 1000.0f)] public float MaximaDistorcao = 2.5f;

    private int somaDosImpactos = 0;
    private float proximoTempoImpacto = 0.0f;
    private Vector3 somaPosicImpactos = Vector3.zero, somaVelocidadeImpactos = Vector3.zero;
    private Vector3[][] meshesOriginais;
    private Rigidbody rigidB;

    void Start()
    {
        rigidB = GetComponent<Rigidbody>();
    }

    void OnEnable()
    {
        meshesOriginais = new Vector3[meshes.Length][];
        for (int i = 0; i < meshes.Length; i++)
        {
            Mesh mesh = meshes[i].mesh;
            meshesOriginais[i] = mesh.vertices;
            mesh.MarkDynamic();
        }
    }

    void OnDisable()
    {
        for (int i = 0; i < meshes.Length; i++)
        {
            Mesh mesh = meshes[i].mesh;
            mesh.vertices = meshesOriginais[i];
            mesh.RecalculateNormals();
            mesh.RecalculateBounds();
        }
    }

    void OnCollisionEnter(Collision collision)
    {
        if (meshes.Length > 0 && colisores.Length > 0)
        {
            int impactCount = 0;
            Vector3 impactPosition = Vector3.zero, impactVelocity = Vector3.zero;
            foreach (ContactPoint contact in collision.contacts)
            {
                float dragRatio = Vector3.Dot(rigidB.GetPointVelocity(contact.point), contact.normal);
                if (dragRatio < -0.6f || collision.relativeVelocity.sqrMagnitude > 3.0f)
                {
                    impactCount++;
                    impactPosition += contact.point;
                    impactVelocity += collision.relativeVelocity;
                }
            }
            if (impactCount > 0)
            {
                float invCount = 1.0f / impactCount;
                impactPosition *= invCount;
                impactVelocity *= invCount;
                somaDosImpactos++;
                somaPosicImpactos += transform.InverseTransformPoint(impactPosition);
                somaVelocidadeImpactos += transform.InverseTransformDirection(impactVelocity);
            }
        }
    }

    void FixedUpdate()
    {
        if (meshes.Length > 0 && colisores.Length > 0)
        {
            if (Time.time - proximoTempoImpacto >= 0.2f && somaDosImpactos > 0)
            {
                float invCount = 1.0f / somaDosImpactos;
                somaPosicImpactos *= invCount;
                somaVelocidadeImpactos *= invCount;
                Vector3 impactVelocity = Vector3.zero;
                if (somaVelocidadeImpactos.sqrMagnitude > 1.5f)
                {
                    impactVelocity = transform.TransformDirection(somaVelocidadeImpactos) * 0.02f;
                }
                if (impactVelocity.sqrMagnitude > 0.0f)
                {
                    Vector3 contactPoint = transform.TransformPoint(somaPosicImpactos);
                    for (int i = 0, c = meshes.Length; i < c; i++)
                    {
                        DeformMesh(meshes[i].mesh, meshesOriginais[i], meshes[i].transform, contactPoint, impactVelocity);
                    }
                }
                somaDosImpactos = 0;
                somaPosicImpactos = Vector3.zero;
                somaVelocidadeImpactos = Vector3.zero;
                proximoTempoImpacto = Time.time + 0.2f * UnityEngine.Random.Range(-0.4f, 0.4f);
            }
        }
    }

    float DeformMesh(Mesh mesh, Vector3[] originalMesh, Transform localTransform, Vector3 contactPoint, Vector3 contactVelocity)
    {
        Vector3[] vertices = mesh.vertices;
        Vector3 localContactPoint = localTransform.InverseTransformPoint(contactPoint);
        Vector3 localContactForce = localTransform.InverseTransformDirection(contactVelocity);
        float sqrMaxDeform = MaximaDistorcao * MaximaDistorcao;
        float totalDamage = 0.0f;
        int damagedVertices = 0;
        for (int i = 0; i < vertices.Length; i++)
        {
            float dist = (localContactPoint - vertices[i]).sqrMagnitude;
            if (dist < areaDeDeform)
            {
                Vector3 damage = (localContactForce * ((areaDeDeform * 2.0f) - Mathf.Sqrt(dist)) / (areaDeDeform * 2.0f)) * (danoPorBatida * (1 + rigidB.velocity.magnitude * 0.2f));
                vertices[i] += damage;
                Vector3 deform = vertices[i] - originalMesh[i];
                if (deform.sqrMagnitude > sqrMaxDeform)
                {
                    vertices[i] = originalMesh[i] + deform.normalized * MaximaDistorcao;
                }
                totalDamage += damage.magnitude;
                damagedVertices++;
            }
        }
        mesh.vertices = vertices;
        mesh.RecalculateNormals();
        mesh.RecalculateBounds();
        return damagedVertices > 0 ? totalDamage / damagedVertices : 0.0f;
    }
}
