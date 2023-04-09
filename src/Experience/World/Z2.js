import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Z2
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
            this.debugFolder = this.debug.ui.addFolder('Z2')
        }

        // Setup
        this.resource = this.resources.items.z2Model
        this.params = {
            rotationSpeed: 0.0003,
            movementSpeed: 0.0003
        }

        this.setModel()
    }

    setModel()
    {

        this.model = this.resource.scene
        this.model.rotation.set(0, 0, 0)
        this.model.position.set(6, -2, 0)
        this.model.scale.set(0.3, 0.3, 0.3)
        this.scene.add(this.model)

        if(this.debug.active)
        {
            this.debugFolder
            .add(this.model.position, 'x')
            .name('hsuPositionX')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.position, 'y')
            .name('hsuPositionY')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.position, 'z')
            .name('hsuPositionZ')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'x')
            .name('hsuRotationX')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'y')
            .name('hsuRotationY')
            .min(-50)
            .max(50)
            .step(1)

            this.debugFolder
            .add(this.model.rotation, 'z')
            .name('hsuRotationZ')
            .min(-50)
            .max(50)
            .step(1)
        }


    }

    update() 
    {      
        this.model.rotation.x -= this.time.delta * this.params.rotationSpeed
        this.model.rotation.z += this.time.delta * (this.params.rotationSpeed/2)

        this.model.position.z -= this.time.delta * (this.params.movementSpeed/2)
        this.model.position.x -= this.time.delta * this.params.movementSpeed
        this.model.position.y += this.time.delta * this.params.movementSpeed
    }
}