// ============================================
// BOTÓN SWAP - Intercambiar monedas From/To
// ============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  
  // Seleccionar elementos del DOM
  const fromSelect = document.getElementById('from');
  const toSelect = document.getElementById('to');
  const swapBtn = document.getElementById('swap-btn');
  
  // Verificar que todos los elementos existan
  if (!fromSelect || !toSelect || !swapBtn) {
    console.warn('Elementos del formulario no encontrados');
    return;
  }
  
  // Agregar event listener al botón Swap
  swapBtn.addEventListener('click', () => {
    // Guardar valor actual de 'from'
    const tempValue = fromSelect.value;
    
    // Intercambiar valores
    fromSelect.value = toSelect.value;
    toSelect.value = tempValue;
    
    // Agregar animación visual (opcional)
    swapBtn.style.transform = 'rotate(180deg)';
    
    // Resetear rotación después de la animación
    setTimeout(() => {
      swapBtn.style.transform = '';
    }, 300);
    
    // Log para debugging (puedes eliminarlo en producción)
    console.log(`Swap: ${fromSelect.value} ⇄ ${toSelect.value}`);
  });
  
  // ============================================
  // MEJORA ADICIONAL: Validación en tiempo real
  // ============================================
  
  const amountInput = document.getElementById('amount');
  
  if (amountInput) {
    amountInput.addEventListener('input', (e) => {
      const value = parseFloat(e.target.value);
      
      // Si el valor es menor a 0.01, mostrar advertencia
      if (value < 0.01 && value > 0) {
        amountInput.style.borderColor = 'var(--error-color)';
      } else {
        amountInput.style.borderColor = '';
      }
    });
  }
  
});