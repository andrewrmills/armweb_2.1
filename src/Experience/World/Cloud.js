import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Cloud
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // setup
        this.resource = this.resources.items.cloud

        this.setGeometry()
        this.setMaterial()
        this.setMesh()

    }
  
    setGeometry()
    {

        this.geometry = new THREE.PlaneGeometry(1, 1);

    }

    setMaterial()
    {

        this.material = new THREE.MeshStandardMaterial({
            map: this.resource,
            transparent: true
        })

    }

    setMesh()
    {
        for(let p=880; p > 250; p--) {
            this.mesh = new THREE.Mesh(this.geometry, this.material)
            this.mesh.position.set(
                this.experience.world.scene.children[1].position.x + 
                (0.0005 * p * Math.cos((4 * p * Math.PI) / 180)),
                this.experience.world.scene.children[1].position.y + 
                (0.0005 * p * Math.sin((4 * p * Math.PI) / 180)),
                this.experience.world.scene.children[1].position.z + (0.0001 * p)
            )
            this.mesh.rotation.z = Math.random() * Math.PI
            // this.mesh.lookAt(0, 0, 0)
            this.scene.add(this.mesh)
        }
    }
}