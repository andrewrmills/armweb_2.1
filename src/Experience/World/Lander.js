import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Lander
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
            this.debugFolder = this.debug.ui.addFolder('Lander')
        }

        // Setup
        this.resource = this.resources.items.landerModel
        this.params = {rotationSpeed: 0.0002}

        this.setModel()
        // this.setAnimation()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(0.3, 0.3, 0.3)
        // this.model.position.set(0.3, 0.3, 0.3)
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

            this.debugFolder
            .add(this.params, 'rotationSpeed')
            .name('landerRotationSpeed')
            .min(0)
            .max(0.01)
            .step(0.0001)
        }
    }

    moveModel()
    {
        const t = document.body.getBoundingClientRect().top/this.sizes.height
        this.resource.scene.position.z = t * 1.5
        this.resource.scene.position.y = t * 5

        // if(this.resource.scene.position.y < -19.7)
        // {
        //     this.resource.scene.position.y = -19.7
        //     this.resource.scene.position.z = -5.8
        // }

        // console.log('y', this.resource.scene.position.y)
        // console.log('z', this.resource.scene.position.z)
    }

    update() 
    {

        this.resource.scene.rotation.y += this.time.delta * this.params.rotationSpeed
        if(this.resource.scene.position.y < -15)
        {
             this.params.rotationSpeed = 0
        }
        else
        {
            this.params.rotationSpeed = 0.0002
        }
        this.moveModel()

    }
}