
# R3F-SplashScreen

The `SplashScreen` component adds a visually appealing splash screen to your React applications, utilizing React, Three.js, and React Three Fiber to render an animated, shader-driven blob with customizable text overlay. This component is built for easy integration and customization, perfect for creating an engaging user experience right from the start.

## Installation

To include the `SplashScreen` in your project, install the package via npm:

```bash
npm install r3f-splashscreen
```

Import and use the component in your application:

```jsx
import SplashScreen from 'your-splash-screen-package-name';

function App() {
  return (
    <SplashScreen
      name="Welcome to Our App"
      duration={5000}
      backgroundColor="#000000"
      fontColor="#FFFFFF"
      blobColor="#00FFFF"
      fontUrl="https://example.com/path-to-your-font.ttf"
      distortionScale={1.5}
      waveSpeed={2}
    />
  );
}

export default App;
```

## Visual Demonstration

Below is a GIF that shows what the `SplashScreen` component looks like in action:

![SplashScreen Example](./assets/example.gif)

## Props

Here's a detailed guide to the props available in the `SplashScreen` component:

- **`name`** (string): The text displayed on the splash screen. This can be your application's name or any greeting.
- **`duration`** (number): The length of time (in milliseconds) that the splash screen remains visible.
- **`backgroundColor`** (string): The CSS color value for the splash screen's background.
- **`fontColor`** (string): The CSS color value for the text, ensuring good contrast with the background for readability.
- **`blobColor`** (string): The CSS color value for the animated blob.
- **`fontUrl`** (string): The URL of the custom font file used for the text, enabling typographic consistency with your brand.
- **`distortionScale`** (number): Adjusts the intensity of the distortion effect on the blob, with higher values resulting in more dramatic effects.
- **`waveSpeed`** (number): Controls the speed of the wave animations on the blob. Increasing this speeds up the animation, while decreasing it slows it down.

## Internal Mechanics

The component utilizes key internal elements:

- **`WaveShaderMaterial`**: A custom shader material designed to create dynamic, wavy surface distortions on the blob, influenced by `blobColor`, `distortionScale`, and `waveSpeed`.
- **`AnimatedBlob`**: A functional component responsible for the real-time frame updates of the blob animation, employing the `useFrame` hook from React Three Fiber to continuously update and animate the blob based on the elapsed time.

## Experimenting with SplashScreen

To experiment with different configurations of the `SplashScreen`, you can modify the properties directly in the `test/app.tsx` file:

1. Clone the repository:
   ```bash
   git clone https://github.com/LayerDynamics/r3f-splashscreen.git
   ```
2. Navigate to the test directory:
   ```bash
   cd r3f-splashscreen
   ```
3. Open `test/app.tsx` and modify the props such as `name`, `duration`, `backgroundColor`, etc.
4. Install dependencies and run the project:
   ```bash
   npm install
   npm run dev
   ```
5. View the changes in your browser to see how different settings affect the component.

## Best Practices

- **Performance Optimization**: Adjust the geometry detail and shader complexity based on your target platform's capabilities to ensure optimal performance.
- **Device Compatibility**: Test the component across different devices and screen sizes to ensure consistent behavior and appearance.

---
