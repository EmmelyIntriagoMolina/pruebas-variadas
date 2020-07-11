window.addEventListener('load', function(){

    function generarTabla() {
        let cuerpo_tabla = document.getElementById('cuerpo-tabla');
        let subtotal = document.getElementById('subtotal');
        let total_tabla = document.getElementById('total');
        let carritoGuardado = JSON.parse(localStorage.getItem('Carrito'));
        if (carritoGuardado != null) {
          cuerpo_tabla.innerHTML = '';
          let total = 0;
          let contador = 0;
          for (let indice of carritoGuardado) {
            total += Number(indice.precio);
            contador++;
            cuerpo_tabla.innerHTML += `<button class="btn-eliminar" id="btn-eliminar-${contador}" onclick="eliminar(this)">x</button><tr>
            <td class="xd">${indice.producto} <strong>x ${indice.cantidad}</strong></td>
            <td>$${indice.precio}</td>
          </tr>`;
          }
          subtotal.innerHTML = `<strong>$${total}</strong>`
          total_tabla.innerHTML = `<strong>$${total+1.96}</strong>`
        }
      }

});