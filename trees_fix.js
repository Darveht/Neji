    // ÁRBOLES REALISTAS DEL ANIME DE NARUTO - SIN ESFERAS
    for(let i = 0; i < 200; i++) {
      let tree = new THREE.Group();
      tree.userData.isTree = true;
      
      let treeType = Math.random();
      
      if(treeType < 0.15) {
        // ÁRBOLES GIGANTES COMO EN EL ANIME
        let trunk = new THREE.Mesh(
          new THREE.BoxGeometry(6, 40, 6),
          new THREE.MeshStandardMaterial({color: 0x8B4513, roughness: 0.9})
        );
        trunk.position.y = 20;
        
        // Copa irregular con bloques
        for(let j = 0; j < 12; j++) {
          let leafBlock = new THREE.Mesh(
            new THREE.BoxGeometry(
              8 + Math.random() * 6,
              6 + Math.random() * 4,
              8 + Math.random() * 6
            ),
            new THREE.MeshStandardMaterial({color: 0x228B22, roughness: 0.8})
          );
          let angle = (j / 12) * Math.PI * 2;
          leafBlock.position.set(
            Math.cos(angle) * (15 + Math.random() * 8),
            35 + Math.random() * 15,
            Math.sin(angle) * (15 + Math.random() * 8)
          );
          tree.add(leafBlock);
        }
        
        // Ramas gruesas
        for(let k = 0; k < 8; k++) {
          let branch = new THREE.Mesh(
            new THREE.BoxGeometry(3, 3, 15),
            new THREE.MeshStandardMaterial({color: 0x654321})
          );
          let angle = (k / 8) * Math.PI * 2;
          branch.position.set(
            Math.cos(angle) * 10,
            25 + k * 2,
            Math.sin(angle) * 10
          );
          branch.rotation.y = angle;
          branch.rotation.z = Math.PI / 8;
          tree.add(branch);
        }
        
        tree.add(trunk);
        tree.scale.setScalar(1.2 + Math.random() * 0.5);
        
      } else if(treeType < 0.8) {
        // ÁRBOLES NORMALES PIXELADOS
        let trunk = new THREE.Mesh(
          new THREE.BoxGeometry(2.5, 25, 2.5),
          new THREE.MeshStandardMaterial({color: 0x8B4513, roughness: 0.9})
        );
        trunk.position.y = 12.5;
        
        // Copa con bloques irregulares
        for(let j = 0; j < 8; j++) {
          let leafPart = new THREE.Mesh(
            new THREE.BoxGeometry(
              5 + Math.random() * 4,
              4 + Math.random() * 3,
              5 + Math.random() * 4
            ),
            new THREE.MeshStandardMaterial({color: 0x228B22, roughness: 0.8})
          );
          leafPart.position.set(
            (Math.random() - 0.5) * 12,
            22 + Math.random() * 8,
            (Math.random() - 0.5) * 12
          );
          tree.add(leafPart);
        }
        
        tree.add(trunk);
        tree.scale.setScalar(0.7 + Math.random() * 0.6);
        
      } else {
        // CEREZOS CON FLORES ROSAS
        let trunk = new THREE.Mesh(
          new THREE.BoxGeometry(1.8, 18, 1.8),
          new THREE.MeshStandardMaterial({color: 0x8B4513, roughness: 0.9})
        );
        trunk.position.y = 9;
        
        // Flores de cerezo en bloques
        for(let j = 0; j < 15; j++) {
          let blossom = new THREE.Mesh(
            new THREE.BoxGeometry(
              3 + Math.random() * 2,
              2.5 + Math.random(),
              3 + Math.random() * 2
            ),
            new THREE.MeshStandardMaterial({color: 0xFFB6C1, roughness: 0.7})
          );
          let angle = (j / 15) * Math.PI * 2;
          blossom.position.set(
            Math.cos(angle) * (5 + Math.random() * 4),
            15 + Math.random() * 6,
            Math.sin(angle) * (5 + Math.random() * 4)
          );
          tree.add(blossom);
        }
        
        tree.add(trunk);
        tree.scale.setScalar(0.6 + Math.random() * 0.4);
      }
      
      // Distribución natural
      let angle = Math.random() * Math.PI * 2;
      let distance = 60 + Math.random() * 350;
      
      tree.position.set(
        Math.cos(angle) * distance,
        0,
        Math.sin(angle) * distance
      );
      
      tree.rotation.y = Math.random() * Math.PI * 2;
      scene.add(tree);
    }

    // ALDEA DE KONOHA COMPLETA
    let konohaVillage = new THREE.Group();
    konohaVillage.userData.isVillage = true;

    // TORRE HOKAGE - EDIFICIO PRINCIPAL
    let hokageTower = new THREE.Group();
    
    // Base de la torre
    let towerBase = new THREE.Mesh(
      new THREE.BoxGeometry(12, 35, 12),
      new THREE.MeshStandardMaterial({color: 0xD2691E, roughness: 0.8})
    );
    towerBase.position.y = 17.5;
    
    // Techo tradicional japonés
    let roof = new THREE.Mesh(
      new THREE.BoxGeometry(16, 4, 16),
      new THREE.MeshStandardMaterial({color: 0x8B0000, roughness: 0.7})
    );
    roof.position.y = 37;
    
    // Símbolo de Konoha
    let konohaSymbol = new THREE.Mesh(
      new THREE.BoxGeometry(6, 6, 0.5),
      new THREE.MeshStandardMaterial({color: 0xFFD700, metalness: 0.8})
    );
    konohaSymbol.position.set(0, 25, 6.2);
    
    // Ventanas
    for(let floor = 0; floor < 6; floor++) {
      for(let side = 0; side < 4; side++) {
        let window = new THREE.Mesh(
          new THREE.BoxGeometry(2, 2, 0.2),
          new THREE.MeshStandardMaterial({color: 0x87CEEB, transparent: true, opacity: 0.7})
        );
        let angle = (side / 4) * Math.PI * 2;
        window.position.set(
          Math.cos(angle) * 6.1,
          8 + floor * 5,
          Math.sin(angle) * 6.1
        );
        hokageTower.add(window);
      }
    }
    
    hokageTower.add(towerBase, roof, konohaSymbol);
    hokageTower.position.set(0, 0, -50);
    konohaVillage.add(hokageTower);

    // ACADEMIA NINJA COMPLETA
    let ninjaAcademy = new THREE.Group();
    
    // Edificio principal de la academia
    let academyMain = new THREE.Mesh(
      new THREE.BoxGeometry(25, 15, 40),
      new THREE.MeshStandardMaterial({color: 0xDEB887, roughness: 0.8})
    );
    academyMain.position.y = 7.5;
    
    // Techo de la academia
    let academyRoof = new THREE.Mesh(
      new THREE.BoxGeometry(28, 3, 43),
      new THREE.MeshStandardMaterial({color: 0x8B0000, roughness: 0.7})
    );
    academyRoof.position.y = 16.5;
    
    // Aulas (ventanas)
    for(let i = 0; i < 8; i++) {
      let classroom = new THREE.Mesh(
        new THREE.BoxGeometry(4, 3, 0.2),
        new THREE.MeshStandardMaterial({color: 0x87CEEB, transparent: true, opacity: 0.6})
      );
      classroom.position.set(
        -10 + (i % 4) * 6,
        10,
        i < 4 ? 20.1 : -20.1
      );
      ninjaAcademy.add(classroom);
    }
    
    // Campo de entrenamiento
    let trainingField = new THREE.Mesh(
      new THREE.BoxGeometry(50, 0.2, 30),
      new THREE.MeshStandardMaterial({color: 0x8FBC8F, roughness: 0.9})
    );
    trainingField.position.set(0, 0.1, 50);
    
    // Postes de entrenamiento
    for(let i = 0; i < 6; i++) {
      let post = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 6, 0.8),
        new THREE.MeshStandardMaterial({color: 0x8B4513, roughness: 0.9})
      );
      post.position.set(
        -15 + (i % 3) * 15,
        3,
        40 + Math.floor(i / 3) * 20
      );
      ninjaAcademy.add(post);
    }
    
    ninjaAcademy.add(academyMain, academyRoof, trainingField);
    ninjaAcademy.position.set(80, 0, 20);
    konohaVillage.add(ninjaAcademy);

    // CASAS RESIDENCIALES DE KONOHA
    for(let i = 0; i < 30; i++) {
      let house = new THREE.Group();
      
      // Base de la casa
      let houseBase = new THREE.Mesh(
        new THREE.BoxGeometry(8, 6, 10),
        new THREE.MeshStandardMaterial({color: 0xD2691E, roughness: 0.8})
      );
      houseBase.position.y = 3;
      
      // Techo
      let houseRoof = new THREE.Mesh(
        new THREE.BoxGeometry(10, 2, 12),
        new THREE.MeshStandardMaterial({color: 0x8B0000, roughness: 0.7})
      );
      houseRoof.position.y = 7;
      
      // Puerta
      let door = new THREE.Mesh(
        new THREE.BoxGeometry(2, 4, 0.2),
        new THREE.MeshStandardMaterial({color: 0x654321, roughness: 0.9})
      );
      door.position.set(0, 2, 5.1);
      
      // Ventanas
      for(let j = 0; j < 2; j++) {
        let window = new THREE.Mesh(
          new THREE.BoxGeometry(1.5, 1.5, 0.2),
          new THREE.MeshStandardMaterial({color: 0x87CEEB, transparent: true, opacity: 0.6})
        );
        window.position.set(j === 0 ? -2.5 : 2.5, 4, 5.1);
        house.add(window);
      }
      
      house.add(houseBase, houseRoof, door);
      
      // Distribución en calles
      let row = Math.floor(i / 6);
      let col = i % 6;
      house.position.set(
        -60 + col * 20,
        0,
        20 + row * 25
      );
      
      konohaVillage.add(house);
    }

    scene.add(konohaVillage);