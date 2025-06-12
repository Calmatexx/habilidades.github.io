const habilidades = {
  curativo: {
    activas: [
      { nombre: "Alok", descripcion: "Aura que cura 5 HP/s y aumenta velocidad 15% por 10s (45s enfriamiento)." },
      { nombre: "Dimitri", descripcion: "Zona de 3.5m que cura 3 HP/s y permite autorevivirse por 10s (85s enfriamiento)." },
      { nombre: "K", descripcion: "Aumenta EP máximo y convierte EP a HP rápido (cambia modo en 20s)." },
      { nombre: "A124", descripcion: "Convierte 60 EP a HP en 4s (10s enfriamiento)." },
      { nombre: "Caroline", descripcion: "Cura y aumenta regeneración de EP a aliados cercanos por 15s." }
    ],
    pasivas: [
      { nombre: "Kapella", descripcion: "Aumenta efectos de curación en 10% y reduce pérdida de HP de aliados caídos en 20%." },
      { nombre: "Olivia", descripcion: "Aliados revividos ganan 30 HP extra." },
      { nombre: "Sonia", descripcion: "Escudo de 100 HP por 3s tras daño letal." },
      { nombre: "Maxim", descripcion: "Consume kits médicos 15% más rápido." },
      { nombre: "Notora", descripcion: "Cura aliados en vehículos con el tiempo." },
      { nombre: "Thiva", descripcion: "Aumenta velocidad de rescate en 20% y otorga 40 HP tras revivir." },
      { nombre: "Josephine", descripcion: "Recupera HP adicional al curar aliados." },
      { nombre: "Kairos", descripcion: "Regenera EP y inflinje mas daño a chalecos y escudos considerablemente." }
    ]
  },
  curacion_dano: {
    activas: [
      { nombre: "Tatsuya", descripcion: "Corre rápido con ráfagas de velocidad acumulables (100s enfriamiento)." },
      { nombre: "Xayne", descripcion: "Gana 60 HP temporal, +75% curación, +40% daño a paredes gloo (150s enfriamiento)." },
      { nombre: "Orion", descripcion: "Absorbe HP enemigos y reemplaza EP con energía carmesí (90s enfriamiento)." },
      { nombre: "Skyler", descripcion: "Destruye paredes gloo y cura 4 HP/s por pared (60s enfriamiento)." },
      { nombre: "Dasha", descripcion: "Reduce retroceso y daño por caída, aumenta velocidad de disparo tras kills." }
    ],
    pasivas: [
      { nombre: "Jota", descripcion: "Recupera HP al dañar con SMG/escopeta, +10% HP al derribar." },
      { nombre: "Dasha", descripcion: "Reduce retroceso, daño por caídas, y aumenta velocidad de disparo en 18% tras kills." },
      { nombre: "Sonia", descripcion: "Escudo de 100 HP por 3s tras daño letal." },
      { nombre: "Luna", descripcion: "Aumenta velocidad de disparo acumulativamente hasta 20%." },
      { nombre: "Joseph", descripcion: "Aumenta velocidad de movimiento en 10% por 1s tras recibir daño." },
      { nombre: "Moco", descripcion: "Marca enemigos dañados por 5s, compartido con aliados." },
      { nombre: "Kairos", descripcion: "Regenera EP y inflinje mas daño a chalecos y escudos considerablemente." }
    ]
  },
  dano: {
    activas: [
      { nombre: "Skyler", descripcion: "Destruye paredes gloo y cura 4 HP/s por pared (60s enfriamiento)." },
      { nombre: "Wukong", descripcion: "Se transforma en arbusto por 10s con -40% velocidad (90s enfriamiento)." },
      { nombre: "Xayne", descripcion: "Gana 60 HP temporal, +75% curación, +40% daño a paredes gloo (150s enfriamiento)." },
      { nombre: "Ignis", descripcion: "Pantalla de fuego de 10m que daña por 8s (90s enfriamiento)." },
      { nombre: "Alvaro", descripcion: "Aumenta daño de explosivos en 10% y rango en 7%." }
    ],
    pasivas: [
      { nombre: "Jota", descripcion: "Recupera HP al dañar con SMG/escopeta, +10% HP al derribar." },
      { nombre: "Moco", descripcion: "Marca enemigos dañados por 5s, compartido con aliados." },
      { nombre: "Luna", descripcion: "Aumenta velocidad de disparo acumulativamente hasta 20%." },
      { nombre: "Joseph", descripcion: "Aumenta velocidad de movimiento en 10% por 1s tras recibir daño." },
      { nombre: "Hayato", descripcion: "Aumenta penetración de armadura hasta 10% a menor HP." },
      { nombre: "D-Bee", descripcion: "Aumenta velocidad y precisión en 15% mientras dispara." },
      { nombre: "Maro", descripcion: "Aumenta daño con distancia hasta 25%, +25% a enemigos marcados." },
      { nombre: "Laura", descripcion: "Aumenta precisión en 50% al usar mira." },
      { nombre: "Kelly", descripcion: "Aumenta velocidad de sprint en 6%." },
      { nombre: "Kairos", descripcion: "Regenera EP y inflinje mas daño a chalecos y escudos considerablemente." }
    ]
  },
  soporte: {
    activas: [
      { nombre: "Kenta", descripcion: "Escudo frontal de 5m que reduce daño 60% por 3s (210s enfriamiento)." },
      { nombre: "K", descripcion: "Aumenta EP máximo y convierte EP a HP rápido (cambia modo en 20s)." },
      { nombre: "Homer", descripcion: "Dron que reduce velocidad enemiga en 40% en 100m (90s enfriamiento)." },
      { nombre: "Santino", descripcion: "Maniquí de 200 HP, teletransporte a 60m (90s enfriamiento)." },
      { nombre: "Steffie", descripcion: "Zona que reduce daño explosivo y balas por 5s (200s enfriamiento)." }
    ],
    pasivas: [
      { nombre: "Kapella", descripcion: "Aumenta curación y reduce pérdida de HP de aliados caídos." },
      { nombre: "Thiva", descripcion: "Aumenta velocidad de rescate y otorga HP tras revivir." },
      { nombre: "Kairos", descripcion: "Regenera EP y inflinje mas daño a chalecos y escudos considerablemente." },
      { nombre: "Rafael", descripcion: "Silencia disparos de francotiradores." },
      { nombre: "Clu", descripcion: "Revela enemigos en 75m." },
      { nombre: "Moco", descripcion: "Marca enemigos dañados por 5s." }
    ]
  },
  escudo: {
    activas: [
      { nombre: "Chrono", descripcion: "Escudo que bloquea 800 de daño por 6s y +15% velocidad (120s enfriamiento)." },
      { nombre: "A124", descripcion: "Convierte 60 EP a HP en 4s (10s enfriamiento)." },
      { nombre: "Kenta", descripcion: "Escudo frontal de 5m que reduce daño 60% por 3s (210s enfriamiento)." },
      { nombre: "Hayato", descripcion: "Aumenta penetración de armadura en 10% a menor HP." }
    ],
    pasivas: [
      { nombre: "Sonia", descripcion: "Escudo de 100 HP por 3s tras daño letal." },
      { nombre: "Notora", descripcion: "Cura aliados en vehículos con el tiempo." },
      { nombre: "Maxim", descripcion: "Consume kits médicos 15% más rápido." },
      { nombre: "Josephine", descripcion: "Recupera HP adicional al curar aliados." },
      { nombre: "Rafael", descripcion: "Silencia disparos de francotiradores." },
      { nombre: "Kairos", descripcion: "Regenera EP y inflinje mas daño a chalecos y escudos considerablemente." }
    ]
  },
  tanque: {
    activas: [
      { nombre: "Olivia", descripcion: "Aliados revividos ganan 30 HP extra." },
      { nombre: "Antonio", descripcion: "Reduce daño recibido al estar en movimiento." },
      { nombre: "Wolfrahh", descripcion: "Aumenta HP máximo y daño mientras está activo (120s enfriamiento)." },
      { nombre: "Dasha", descripcion: "Reduce retroceso y daño por caída." },
      { nombre: "Maro", descripcion: "Aumenta daño con distancia, útil para resistir y atacar." }
    ],
    pasivas: [
      { nombre: "Thiva", descripcion: "Aumenta velocidad de rescate y otorga HP tras revivir." },
      { nombre: "Kapella", descripcion: "Aumenta curación y reduce pérdida de HP de aliados caídos." },
      { nombre: "Maxim", descripcion: "Consume kits médicos más rápido, facilitando curaciones." },
      { nombre: "Sonia", descripcion: "Escudo de 100 HP por 3s tras daño letal." },
      { nombre: "Antonio", descripcion: "Reduce daño recibido en movimiento." },
      { nombre: "Kairos", descripcion: "Regenera EP y inflinje mas daño a chalecos y escudos considerablemente." }
    ]
  }
};

function elegirRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generarCombo() {
  const tipo = document.getElementById('comboTipo').value;
  const grupo = habilidades[tipo];
  if (!grupo) {
    document.getElementById('resultadoCombo').textContent = "Tipo de combo no encontrado.";
    return;
  }
  // Elegir 1 activa random
  const activa = elegirRandom(grupo.activas);
  // Elegir 3 pasivas diferentes y que no repitan nombre
  const pasivasElegidas = [];
  const pasivasCandidatas = [...grupo.pasivas];
  while (pasivasElegidas.length < 3 && pasivasCandidatas.length > 0) {
    const idx = Math.floor(Math.random() * pasivasCandidatas.length);
    const seleccionada = pasivasCandidatas.splice(idx,1)[0];
    if (seleccionada.nombre !== activa.nombre) {
      pasivasElegidas.push(seleccionada);
    }
  }

  // Mostrar resultado
  const resultado = document.getElementById('resultadoCombo');
  resultado.innerHTML = `
    <h2>Combo ${tipo.replace(/_/g, ' ').toUpperCase()}</h2>
    <p><strong>Habilidad activa:</strong> ${activa.nombre}</p>
    <p>${activa.descripcion}</p>
    <h3>Habilidades pasivas:</h3>
    <ul>
      ${pasivasElegidas.map(p => `<li><strong>${p.nombre}:</strong> ${p.descripcion}</li>`).join('')}
    </ul>
    <p class="consejo">Consejo: Combina habilidades para maximizar tu estrategia en partidas futuristas.</p>
  `;
  resultado.style.opacity = 0;
  setTimeout(() => { resultado.style.opacity = 1; }, 50);
}
