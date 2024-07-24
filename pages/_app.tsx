import "@/styles/app.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { createMap } from 'maplibre-gl-js-amplify';
import 'maplibre-gl/dist/maplibre-gl.css';

Amplify.configure(outputs);

async function initializeMap() {
  const map = await createMap({
    container: 'map', // An HTML Element or HTML element ID to render the map in https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/
    center: [-123.1187, 49.2819], // [Longitude, Latitude]
    zoom: 11
  });
}

initializeMap();

export default async function App({ Component, pageProps }: AppProps) {
  const element: any = document.getElementsByClassName("class")[0];

  const map = await createMap({
    container: element,
  })
  return <Component {...pageProps} />;
}
