import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-cycle
import { Main } from "./pages/Main";
import Welcome from "./pages/Welcome";
import Registration from "./pages/Registration";
import Error from "./pages/Error";
import { MyTracks } from "./pages/MyTracks";
import { DanceHits } from "./pages/DanceHits";
import { IndiCharge } from "./pages/IndiCharge";
// eslint-disable-next-line import/no-unresolved
import { PlaylistOfTheDay } from "./pages/playlistOfTheDay";

// eslint-disable-next-line import/prefer-default-export
export function AppRoutes() {
    return (
    <Routes>
      <Route path="/welcome" element={<Welcome/>} />
      <Route path="/" element={<Main/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/mytracks" element={<MyTracks/>} />
      <Route path="/playlist/1" element={<PlaylistOfTheDay/>} />
      <Route path="/playlist/2" element={<DanceHits/>} />
      <Route path="/playlist/3" element={<IndiCharge/>} />




      <Route path="*" element={<Error/>} />


    </Routes>
  );
}
