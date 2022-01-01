import { NextApiRequest } from "next";

export function getSession(req: NextApiRequest) {
  const { authorization } = req.headers;
  const isAuthorized = authorization === "Bearer jwt_for_user";

  return {
    access_token: authorization?.replace("Bearer ", ""),
    token_type: "bearer",
    ...(isAuthorized && {
      user: {
        id: "1cb11d17-e2f9-4cb4-8ebc-4308965fc026",
        created_at: "2021-12-31T17:05:00Z",
        app_metadata: {},
        aud: "foo",
        user_metadata: {},
      },
    }),
  };
}
