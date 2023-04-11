import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Gantry
{
    constructor() 
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.world = this.experience.physics
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('Gantry')
        }

        // Setup
        this.resource = this.resources.items.gantryModel

        this.setModel()
    }

    setModel()
    {

        // Model
        this.model = this.resource.scene
        this.model.rotation.set(0, 0, 0)
        this.model.position.set(-0.44, -21.15, -5)
        this.model.scale.set(0.5, 0.5, 0.5)
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
                child.receiveShadow = true
            }
        })

        if(this.debug.active)
        {
            this.debugFolder
            .add(this.model.position, 'x')
            .name('gantryPositionX')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.position, 'y')
            .name('gantryPositionY')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.position, 'z')
            .name('gantryPositionZ')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'x')
            .name('gantryRotationX')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'y')
            .name('gantryRotationY')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'z')
            .name('gantryRotationZ')
            .min(-50)
            .max(50)
            .step(1)
        }


    }

    update() 
    {      

    }
}