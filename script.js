mapboxgl.accessToken = settings.token;
var map = new mapboxgl.Map({
    container: 'map',
    style: settings.map,
    center: [-0.069959, 51.46727],
    zoom: 11.5
});

let toggleLayer = (name, layers) => {

    if (layers.length) {

        layers.forEach(function (layer) {

            if (layer === name) {

                map.setLayoutProperty(layer, "visibility", "visible");

            } else {

                map.setLayoutProperty(layer, "visibility", "none");

            }

        });

    }

}

let layersBox = document.getElementById("layers");

map.on("load", function () {

    settings.layers.forEach(function (layer) {

        var button = document.createElement("button");

        button.onclick = () => {

            toggleLayer(layer, settings.layers);

            Array.from(document.querySelectorAll("#layers button")).forEach(function (otherButton) {

                otherButton.setAttribute("class", "");

            })

            button.setAttribute("class", "active");

        }

        button.innerHTML = layer;

        layersBox.appendChild(button);

    });

})
