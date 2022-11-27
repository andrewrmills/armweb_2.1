import * as THREE from 'three'
import Experience from "../Experience"

export default class Floor
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.SphereGeometry(20, 32, 16)
    }

    setTextures()
    {
        this.textures = {}

        this.textures.color = this.resources.items.moonColorTexture
        this.textures.color.encoding = THREE.sRGBEncoding
        this.textures.color.repeat.set(15, 15)
        this.textures.color.wrapS = THREE.RepeatWrapping
        this.textures.color.wrapT = THREE.RepeatWrapping

        this.textures.ambientOcclusion = this.resources.items.moonAmbientOcclusionTexture
        this.textures.ambientOcclusion.repeat.set(15, 15)
        this.textures.ambientOcclusion.wrapS = THREE.RepeatWrapping
        this.textures.ambientOcclusion.wrapT = THREE.RepeatWrapping

        this.textures.height = this.resources.items.moonHeightTexture
        this.textures.height.repeat.set(15, 15)
        this.textures.height.wrapS = THREE.RepeatWrapping
        this.textures.height.wrapT = THREE.RepeatWrapping

        this.textures.normal = this.resources.items.moonNormalTexture
        this.textures.normal.repeat.set(15, 15)
        this.textures.normal.wrapS = THREE.RepeatWrapping
        this.textures.normal.wrapT = THREE.RepeatWrapping

        this.textures.roughness = this.resources.items.moonRoughnessTexture
        this.textures.roughness.repeat.set(15, 15)
        this.textures.roughness.wrapS = THREE.RepeatWrapping
        this.textures.roughness.wrapT = THREE.RepeatWrapping
    }

    setMaterial()
    {
        this.material = new THREE.MeshStandardMaterial({
            map: this.textures.color,
            aoMap: this.textures.ambientOcclusion,
            // displacementMap: this.textures.height,
            normalMap: this.textures.normal,
            roughnessMap: this.textures.roughness
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(0, -40, -30)
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }

}