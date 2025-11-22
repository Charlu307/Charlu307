function toggleStyles() {
    const style1 = document.getElementById('StyleSheet1');
    const style2 = document.getElementById('StyleSheet2');
    const body = document.body;

    if (style1.disabled) {
        // Si StyleSheet1 está deshabilitado, lo habilitamos y deshabilitamos StyleSheet2
        style1.disabled = false;
        style2.disabled = true;
        body.className = 'style1'; // Actualiza la clase del body
    } else {
        // Si StyleSheet1 está habilitado, lo deshabilitamos y habilitamos StyleSheet2
        style1.disabled = true;
        style2.disabled = false;
        body.className = 'style2'; // Actualiza la clase del body
    }
}

// Ejecutar la función una vez al cargar para asegurar que la clase inicial del body coincida con el estilo activo
document.addEventListener('DOMContentLoaded', () => {
    const style1 = document.getElementById('StyleSheet1');
    const body = document.body;
    if (style1 && !style1.disabled) {
        body.className = 'style1';
    } else {
        body.className = 'style2';
    }
});