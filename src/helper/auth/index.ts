export const handleGoogleLogin = () => {
  window.location.href = "http://localhost:3000/api/v1/auth/google";
};

export const handleGithubLogin = () => {
  window.location.href = "http://localhost:3000/api/v1/auth/github";
};
