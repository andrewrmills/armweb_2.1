import * as THREE from 'three'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import Experience from '../Experience.js'

export default class Font
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.helvetiker

        if(this.experience.sizes.height > this.experience.sizes.width)
        {
            this.setGeometryAMobile()
            this.setMaterialAMobile()
            this.setMeshAMobile()

            this.setGeometryBMobile()
            this.setMaterialBMobile()
            this.setMeshBMobile()

            this.setGeometryCMobile()
            this.setMaterialCMobile()
            this.setMeshCMobile()
        }
        else
        {
            this.setGeometryA()
            this.setMaterialA()
            this.setMeshA()
    
            this.setGeometryB()
            this.setMaterialB()
            this.setMeshB()
        }
    }
    
    setGeometryA()
    {
        this.geometry = new TextGeometry(
            'Andrew Mills',
            {
                font: this.resource,
                size: 2,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        this.geometry.center()
    }
    setMaterialA()
    {
        this.material = new THREE.MeshNormalMaterial({
        })
    }

    setMeshA()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(-10, -5, -25)
        this.mesh.rotation.y = 0.075
        this.scene.add(this.mesh)
    }

    setGeometryB()
    {
        this.geometry = new TextGeometry(
            'Developer. Pipe Dreamer. All Round Nice Guy.',
            {
                font: this.resource,
                size: 1,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        this.geometry.center()
    }
    setMaterialB()
    {
        this.material = new THREE.MeshNormalMaterial({
        })
    }

    setMeshB()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(-4, -12, -25)
        this.mesh.rotation.y = 0.075
        this.scene.add(this.mesh)
    }

    setGeometryAMobile()
    {
        this.geometry = new TextGeometry(
            'Andrew Mills',
            {
                font: this.resource,
                size: 1,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        this.geometry.center()
    }
    setMaterialAMobile()
    {
        this.material = new THREE.MeshNormalMaterial({
        })
    }

    setMeshAMobile()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(-1.75, -5, -25)
        this.mesh.rotation.y = 0.075
        this.scene.add(this.mesh)
    }

    setGeometryBMobile()
    {
        this.geometry = new TextGeometry(
            'Developer. Pipe Dreamer.',
            {
                font: this.resource,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        this.geometry.center()
    }
    setMaterialBMobile()
    {
        this.material = new THREE.MeshNormalMaterial({
        })
    }

    setMeshBMobile()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(-1.3, -11, -25)
        this.mesh.rotation.y = 0.075
        this.scene.add(this.mesh)
    }

    setGeometryCMobile()
    {
        this.geometry = new TextGeometry(
            'All Round Nice Guy.',
            {
                font: this.resource,
                size: 0.5,
                height: 0.2,
                curveSegments: 5,
                bevelEnabled: true,
                bevelThickness: 0.03,
                bevelSize: 0.02,
                bevelOffset: 0,
                bevelSegments: 4
            }
        )
        this.geometry.center()
    }
    setMaterialCMobile()
    {
        this.material = new THREE.MeshNormalMaterial({
        })
    }

    setMeshCMobile()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.position.set(-1.3, -12, -25)
        this.mesh.rotation.y = 0.075
        this.scene.add(this.mesh)
    }
}