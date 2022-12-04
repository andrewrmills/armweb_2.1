import * as THREE from 'three'
import Experience from "../Experience"

export default class Stars
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setMaterial()
        this.setMesh()

        this.setGeometryB()
        this.setMaterialB()
        this.setMeshB()
    }

    setGeometry()
    {
        const particlesCount = 1000
        const positions = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount; i++)
        {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 80
            positions[i * 3 + 1] = -15 + (Math.random() - 0.5) * 100
            positions[i * 3 + 2] = -20 + (Math.random() - 0.5) * 10
        }

        this.geometry = {}
        this.geometry = new THREE.BufferGeometry()
        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    }

    setMaterial()
    {
        this.material = new THREE.PointsMaterial({
            color: '#ffffff',
            sizeAttenuation: true,
            size: 0.1
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Points(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

    setGeometryB()
    {
        const particlesCount = 500
        const positions = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount; i++)
        {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 80
            positions[i * 3 + 1] = -50 + (Math.random() - 0.5) * 50
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20
        }

        this.geometry = {}
        this.geometry = new THREE.BufferGeometry()
        this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    }

    setMaterialB()
    {
        this.material = new THREE.PointsMaterial({
            color: '#ffffff',
            sizeAttenuation: true,
            size: 0.1
        })
    }

    setMeshB()
    {
        this.mesh = new THREE.Points(this.geometry, this.material)
        this.scene.add(this.mesh)
    }

}