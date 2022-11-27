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
    }

    setGeometry()
    {
        const particlesCount = 1000
        const positions = new Float32Array(particlesCount * 3)

        for (let i = 0; i < particlesCount; i++)
        {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 60
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80
            positions[i * 3 + 2] = - 30 + (Math.random() - 0.5) * 10
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

}