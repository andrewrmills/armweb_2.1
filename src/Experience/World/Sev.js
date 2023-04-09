import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Sev
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
            this.debugFolder = this.debug.ui.addFolder('SEV')
        }

        // Setup
        this.resource = this.resources.items.sevModel

        this.setModel()
        // this.setAnimation()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.2, 0.2, 0.2)
        this.model.position.set(-0.6, -19.4, -10)
        this.model.rotation.set(0, 1.4, 0)
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
                child.material.side = THREE.DoubleSide
            }
        })

        // Debug
        if(this.debug.active)
        {
            this.debugFolder
            .add(this.model.position, 'x')
            .name('landerPositionX')
            .min(-20)
            .max(20)
            .step(0.001)

            this.debugFolder
            .add(this.model.position, 'y')
            .name('landerPositionY')
            .min(-30)
            .max(20)
            .step(0.001)

            this.debugFolder
            .add(this.model.position, 'z')
            .name('landerPositionZ')
            .min(-20)
            .max(20)
            .step(0.001)

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