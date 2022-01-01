import { fetcher } from "./lib/fetcher";
import qs from "qs";

const { REST_URL } = process.env;

test("embedded select", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $select: ["messages"],
    })}`
  );
  expect(res).toMatchSnapshot();
});

describe("embedded filters", () => {
  // TODO: Test more filters
  test("embedded eq", async () => {
    const res = await fetcher(
      `${REST_URL}/users?${qs.stringify({
        $select: ["messages"],
        "messages.channel_id": 1,
      })}`
    );
    expect(res).toMatchSnapshot();
  });
  test("embedded or", async () => {
    const res = await fetcher(
      `${REST_URL}/users?${qs.stringify({
        $or: [
          { "messages.channel_id": 2 },
          { "messages.message": "Hello World 👋" },
        ],
        $select: ["messages"],
      })}`
    );
    expect(res).toMatchSnapshot();
  });
  test("embedded or with and", async () => {
    const res = await fetcher(
      `${REST_URL}/users?${qs.stringify({
        $or: [
          { "messages.channel_id": 2 },
          {
            "messages.message": "Hello World 👋",
            "messages.username": "supabot",
          },
        ],
        $select: ["messages"],
      })}`
    );
    expect(res).toMatchSnapshot();
  });
});

describe("embedded transforms", () => {
  test("embedded order", async () => {
    const res = await fetcher(
      `${REST_URL}/users?${qs.stringify({
        $select: ["messages"],
        $sort: {
          "messages.channel_id": -1,
        },
      })}`
    );
    expect(res).toMatchSnapshot();
  });

  test("embedded order on multiple columns", async () => {
    const res = await fetcher(
      `${REST_URL}/users?${qs.stringify({
        $select: ["messages"],
        $sort: {
          "messages.channel_id": -1,
          "messages.username": -1,
        },
      })}`
    );
    expect(res).toMatchSnapshot();
  });

  // test("embedded limit", async () => {
  //   const res = await postgrest
  //     .from("users")
  //     .select("messages(*)")
  //     .limit(1, { foreignTable: "messages" });
  //   expect(res).toMatchSnapshot();
  // });

  // test("embedded range", async () => {
  //   const res = await postgrest
  //     .from("users")
  //     .select("messages(*)")
  //     .range(1, 1, { foreignTable: "messages" });
  //   expect(res).toMatchSnapshot();
  // });
});
