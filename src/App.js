import { Routes, Route } from "react-router-dom";
import Button from "./Button";
import Screen from "./Screen";
import "./styles.css";

/* Change debug to `true` to see the invisible Buttons */
export const debug = false;

/* Step 1
<---- UPLOAD YOU OWN IMAGE FILES INTO /public

You can use .jpg, .png, .svg
Try to make all your images roughly the same width, 
i.e. 360 pixels wide for a mobile screen
or 1200 pixels wide for a desktop screen
*/

export default function App() {
  /* Step 2

  For each Screen in your click dummy, create a new
  - Route
    - Screen

  If you want to make the screens interactive, place a Button inside the screen
  – Route
    – Screen
      – Button
      – Button

  The Button "to" parameter links to the Route "path" parameter.
  The Screen "image" parameter should be the file name in the / folder (root)
  */
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Screen image="/Page 1.jpg">
              <Button to="/disclaimer" x="530" y="500" w="160" h="55" />
            </Screen>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <Screen image="/Page 2.jpg">
              <Button to="/get-start" x="530" y="500" w="160" h="55" />
            </Screen>
          }
        />
        <Route
          path="/get-start"
          element={
            <Screen image="/Page 3.jpg">
              <Button to="/home" x="470" y="500" w="240" h="55" />
            </Screen>
          }
        />
        <Route
          path="/home"
          element={
            <Screen image="/Main Page.jpg">
              <Button to="/login" x="705" y="105" w="250" h="55" />
            </Screen>
          }
        />
        <Route
          path="/login"
          element={
            <Screen image="/Login Page.jpg">
              <Button to="/upload" x="550" y="440" w="90" h="55" />
            </Screen>
          }
        />
        <Route
          path="/upload"
          element={
            <Screen image="/Upload Page.jpg" back="/intro-1">
              <Button to="/success" x="555" y="475" w="90" h="55" />
            </Screen>
          }
        />
        <Route
          path="/success"
          element={
            <Screen image="/Success Page.jpg" back="/intro-2">
              <Button to="/upload" x="470" y="437" w="280" h="55" />
            </Screen>
          }
        />
      </Routes>
    </div>
  );
}
