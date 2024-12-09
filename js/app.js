new Vue({
    el: '#app',
    data: {
        contactos: [
            { nombre: 'John Doe', email: 'john.doe@deusto.es', telefono: '555555555' }
        ],
        nuevoContacto: {
            nombre: '',
            email: '',
            telefono: ''
        },
        // Aquí puedes cambiar el mensaje y la URL a compartir
        compartirMensaje: '¡Mira esta increíble aplicación hecha con Vue!',
        compartirURL: 'https://iw-11-agendavue.netlify.app',
    },
    methods: {
        addContacto() {
            if (this.nuevoContacto.nombre && this.nuevoContacto.email && this.nuevoContacto.telefono) {
                this.contactos.push({ ...this.nuevoContacto });
                this.nuevoContacto = { nombre: '', email: '', telefono: '' };
            }
        },
        eliminarContacto(index) {
            this.contactos.splice(index, 1);
        },
        compartirTwitter() {
            const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.compartirMensaje)}&url=${encodeURIComponent(this.compartirURL)}`;
            console.log("Twitter URL:", url);
            window.open(url, '_blank');
        },
        compartirFacebook() {
            const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.compartirURL)}`;
            console.log("Facebook URL:", url);
            window.open(url, '_blank');
        }
    }
});

new Vue({
    el: "#about",
    data:{
        compartirMensaje: '¡Mira esta increíble aplicación hecha con Vue!',
        compartirURL: 'https://iw-11-agendavue.netlify.app',
},
    methods: {
    compartirTwitter() {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.compartirMensaje)}&url=${encodeURIComponent(this.compartirURL)}`;
        console.log("Twitter URL:", url);
        window.open(url, '_blank');
    },
    compartirFacebook() {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.compartirURL)}`;
        console.log("Facebook URL:", url);
        window.open(url, '_blank');
    },
}

}
)