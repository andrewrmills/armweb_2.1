import * as THREE from 'three'
import Experience from "../Experience"

export default class Floor
{
    constructor() 
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug
        this.sizes = this.experience.sizes

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Moon')
        }

        // Setup
        this.resource = this.resources.items.moonModel
        this.params = {rotationSpeed: 0.0002}

        this.setModel()
        // this.setAnimation()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(6, 6, 6)
        this.model.position.set(13, -35, -10)
        this.model.rotation.set(1.8, 0, 0.1)
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        // Debug
        if(this.debug.active)
        {
        this.debugFolder
        .add(this.model.rotation, 'x')
        .name('landerRotationX')
        .min(0)
        .max(Math.PI * 2)
        .step(0.001)

        this.debugFolder
        .add(this.model.rotation, 'y')
        .name('landerRotationY')
        .min(0)
        .max(Math.PI * 2)
        .step(0.001)

        this.debugFolder
        .add(this.model.rotation, 'z')
        .name('landerRotationZ')
        .min(0)
        .max(Math.PI * 2)
        .step(0.001)
        }
    }
}
