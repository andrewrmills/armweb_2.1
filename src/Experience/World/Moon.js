import * as THREE from 'three'
import Experience from "../Experience"

export default class Moon
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
        this.params = {rotationSpeed: -0.00002}

        this.setModel()
        // this.setAnimation()
    }

    setModel()
    {
        this.model = this.resource.scene
        this.model.scale.set(11, 11, 10)
        this.model.position.set(-1.8, -46.3, -10)
        this.model.rotation.set(2, -3, 1)
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.receiveShadow = true
            }
        })

        // Debug
        if(this.debug.active)
        {
        this.debugFolder
        .add(this.model.rotation, 'x')
        .name('moonRotationX')
        .min(0)
        .max(Math.PI * 2)
        .step(0.001)

        this.debugFolder
        .add(this.model.rotation, 'y')
        .name('moonRotationY')
        .min(0)
        .max(Math.PI * 2)
        .step(0.001)

        this.debugFolder
        .add(this.model.rotation, 'z')
        .name('moonRotationZ')
        .min(0)
        .max(Math.PI * 2)
        .step(0.001)

        this.debugFolder
        .add(this.model.position, 'x')
        .name('moonPositionX')
        .min(-50)
        .max(50)
        .step(0.01)

        this.debugFolder
        .add(this.model.position, 'y')
        .name('moonPositionY')
        .min(-50)
        .max(50)
        .step(0.01)

        this.debugFolder
        .add(this.model.position, 'z')
        .name('moonPositionZ')
        .min(-50)
        .max(50)
        .step(0.01)

        this.debugFolder
        .add(this.model.scale, 'x')
        .name('moonScaleX')
        .min(0)
        .max(20)
        .step(0.01)

        this.debugFolder
        .add(this.model.scale, 'y')
        .name('moonScaleY')
        .min(0)
        .max(20)
        .step(0.01)

        this.debugFolder
        .add(this.model.scale, 'z')
        .name('moonScaleZ')
        .min(0)
        .max(20)
        .step(0.01)
        }
    }

    update() 
    {
        // this.resource.scene.rotation.y += this.time.delta * this.params.rotationSpeed

        // //Camera
        // if(this.experience.scene.children[0].position.y > 15)
        // {
        //     this.params.rotationSpeed = 0
        // }
        // else
        // {
        //     this.params.rotationSpeed = -0.00002
        // }

        // const t = document.body.getBoundingClientRect().top/this.sizes.height
        // this.resource.scene.rotation.y = -3.4 - t * 0.1

    }
}
