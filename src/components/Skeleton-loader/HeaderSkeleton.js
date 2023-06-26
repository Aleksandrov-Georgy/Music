import React, { useEffect } from "react";
import TrackList from "../TrackList";

import SkeletonTrackList from "./Skeleton-TrackList";

function HeaderSkeleton() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <SkeletonTrackList />
      ) : (
        <TrackList />
      )}
    </div>
  );
}

export default HeaderSkeleton;