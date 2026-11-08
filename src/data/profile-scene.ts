export interface ProfileSceneAsset {
  mp4: string;
  webm?: string;
  poster: string;
}

/**
 * Enable only after the actual character animation has passed visual review.
 * See assets/profile-scene/README.md for the production brief and asset paths.
 * A still image must not be presented as the finished animation.
 */
export const profileScene: ProfileSceneAsset | null = null;
