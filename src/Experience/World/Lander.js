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
        this.scene.add(this.model)

        this.model.traverse((child) => 
        {
            if(child instanceof THREE.Mesh)
            {
                child.castShadow = true
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
        this.resource.scene.position.z = t * 4
        this.resource.scene.position.y = t * 4
    }

    update() 
    {
        this.resource.scene.rotation.y += this.time.delta * this.params.rotationSpeed
        this.moveModel()
        // console.log('lander', this.resource.scene.position.y)
    }

    // setAnimation()
    // {
    //     this.animation = {}
    //     this.animation.mixer = new THREE.AnimationMixer(this.model)

    //     this.animation.actions = {}
        
    //     this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
    //     this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1])
    //     this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2])

    //     this.animation.actions.current = this.animation.actions.idle
    //     this.animation.actions.current.play()

    //     this.animation.play = (name) =>
    //     {
    //         const newAction = this.animation.actions[name]
    //         const oldAction = this.animation.actions.current

    //         newAction.reset()
    //         newAction.play()
    //         newAction.crossFadeFrom(oldAction, 1)

    //         this.animation.actions.current = newAction
    //     }

    //     // Debug
    //     if(this.debug.active)
    //     {
    //         const debugObject = {
    //             playIdle: () => {this.animation.play('idle')},
    //             playWalking: () => {this.animation.play('walking')},
    //             playRunning: () => {this.animation.play('running')}
    //         }
    //         this.debugFolder.add(debugObject, 'playIdle')
    //         this.debugFolder.add(debugObject, 'playWalking')
    //         this.debugFolder.add(debugObject, 'playRunning')
    //     }
    // }

    // update() 
    // {
    //     this.animation.mixer.update(this.time.delta * 0.001)
    // }
}