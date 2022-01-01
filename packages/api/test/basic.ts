import { fetcher } from "./lib/fetcher";

const { OBJECT_HEADER, REST_URL } = process.env;

test("basic select table", async () => {
  const res = await fetcher(`${REST_URL}/users`);
  expect(res).toMatchSnapshot();
});

describe("basic insert, update, delete", () => {
  test("basic insert", async () => {
    let res = await fetcher(`${REST_URL}/messages`, {
      body: JSON.stringify({
        message: "foo",
        username: "supabot",
        channel_id: 1,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    expect(res).toMatchSnapshot();

    res = await fetcher(`${REST_URL}/messages`);
    expect(res).toMatchSnapshot();
  });

  test("basic update", async () => {
    let res = await fetcher(`${REST_URL}/messages?message=foo`, {
      body: JSON.stringify({ channel_id: 2 }),
      headers: {
        Accept: OBJECT_HEADER,
        "Content-Type": "application/json",
      },
      method: "PATCH",
    });
    expect(res).toMatchSnapshot();

    res = await fetcher(`${REST_URL}/messages`);
    expect(res).toMatchSnapshot();
  });

  test("basic delete", async () => {
    let res = await fetcher(`${REST_URL}/messages?message=foo`);
    expect(res).toMatchSnapshot();

    res = await fetcher(`${REST_URL}/messages`);
    expect(res).toMatchSnapshot();
  });
});

test("select with no match", async () => {
  const res = await fetcher(`${REST_URL}/users?username=missing`);
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [],
      "limit": 64,
      "skip": 0,
      "total": null,
    }
  `);
});
