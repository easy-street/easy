import { fetcher } from "./lib/fetcher";
import qs from "qs";

const { REST_URL } = process.env;

test("or", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $or: [{ status: "OFFLINE" }, { username: "supabot" }],
      $select: ["status", "username"],
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "status": "ONLINE",
          "username": "supabot",
        },
        Object {
          "status": "OFFLINE",
          "username": "kiwicopple",
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "2",
    }
  `);
});

test("eq", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $select: ["username"],
      username: "supabot",
    })}`
  );

  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "username": "supabot",
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "1",
    }
  `);
});

test("neq", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $select: ["username"],
      username: { $ne: "supabot" },
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "username": "kiwicopple",
        },
        Object {
          "username": "awailas",
        },
        Object {
          "username": "dragarcia",
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "3",
    }
  `);
});

test("gt", async () => {
  const res = await fetcher(
    `${REST_URL}/messages?${qs.stringify({
      $select: ["id"],
      id: { $gt: 1 },
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "id": 2,
        },
        Object {
          "id": 3,
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "2",
    }
  `);
});

test("gte", async () => {
  const res = await fetcher(
    `${REST_URL}/messages?${qs.stringify({
      $select: ["id"],
      id: { $gte: 1 },
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "id": 1,
        },
        Object {
          "id": 2,
        },
        Object {
          "id": 3,
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "3",
    }
  `);
});

test("lt", async () => {
  const res = await fetcher(
    `${REST_URL}/messages?${qs.stringify({
      $select: ["id"],
      id: { $lt: 2 },
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "id": 1,
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "1",
    }
  `);
});

test("lte", async () => {
  const res = await fetcher(
    `${REST_URL}/messages?${qs.stringify({
      $select: ["id"],
      id: { $lte: 2 },
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "id": 1,
        },
        Object {
          "id": 2,
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "2",
    }
  `);
});

// test("like", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("username")
//     .like("username", "%supa%");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "username": "supabot",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "username": "supabot",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("ilike", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("username")
//     .ilike("username", "%SUPA%");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "username": "supabot",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "username": "supabot",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

test("is", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $select: ["data"],
      data: null,
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "data": null,
        },
        Object {
          "data": null,
        },
        Object {
          "data": null,
        },
        Object {
          "data": null,
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "4",
    }
  `);
});

test("in", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $select: ["status"],
      status: { $in: ["ONLINE", "OFFLINE"] },
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "status": "ONLINE",
        },
        Object {
          "status": "OFFLINE",
        },
        Object {
          "status": "ONLINE",
        },
        Object {
          "status": "ONLINE",
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "4",
    }
  `);
});

// test("contains", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .contains("age_range", "[1,2)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("containedBy", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .containedBy("age_range", "[1,2)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("rangeLt", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .rangeLt("age_range", "[2,25)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("rangeGt", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .rangeGt("age_range", "[2,25)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("rangeGte", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .rangeGte("age_range", "[2,25)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[20,30)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[20,30)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("rangeLte", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .rangeLte("age_range", "[2,25)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("rangeAdjacent", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .rangeAdjacent("age_range", "[2,25)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[1,2)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//         Object {
//           "age_range": "[25,35)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("overlaps", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("age_range")
//     .overlaps("age_range", "[2,25)");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "age_range": "[20,30)",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "age_range": "[20,30)",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("textSearch", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("catchphrase")
//     .textSearch("catchphrase", `'fat' & 'cat'`, { config: "english" });
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("textSearch with plainto_tsquery", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("catchphrase")
//     .textSearch("catchphrase", `'fat' & 'cat'`, {
//       config: "english",
//       type: "plain",
//     });
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("textSearch with phraseto_tsquery", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("catchphrase")
//     .textSearch("catchphrase", "cat", { config: "english", type: "phrase" });
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//         Object {
//           "catchphrase": "'bat' 'cat'",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//         Object {
//           "catchphrase": "'bat' 'cat'",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("textSearch with websearch_to_tsquery", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("catchphrase")
//     .textSearch("catchphrase", `'fat' & 'cat'`, {
//       config: "english",
//       type: "websearch",
//     });
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "catchphrase": "'cat' 'fat'",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

test("multiple filters", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      data: null,
      status: "ONLINE",
      username: "supabot",
    })}`
  );
  expect(res).toMatchInlineSnapshot(`
    Object {
      "data": Array [
        Object {
          "age_range": "[1,2)",
          "catchphrase": "'cat' 'fat'",
          "data": null,
          "status": "ONLINE",
          "username": "supabot",
        },
      ],
      "limit": 64,
      "skip": 0,
      "total": "1",
    }
  `);
});

// test("filter", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("username")
//     .filter("username", "eq", "supabot");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "username": "supabot",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "username": "supabot",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("match", async () => {
//   const res = await postgrest
//     .from("users")
//     .select("username, status")
//     .match({ username: "supabot", status: "ONLINE" });
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [
//         Object {
//           "status": "ONLINE",
//           "username": "supabot",
//         },
//       ],
//       "count": null,
//       "data": Array [
//         Object {
//           "status": "ONLINE",
//           "username": "supabot",
//         },
//       ],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });

// test("filter on rpc", async () => {
//   const res = await postgrest
//     .rpc("get_username_and_status", { name_param: "supabot" })
//     .neq("status", "ONLINE");
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": Array [],
//       "count": null,
//       "data": Array [],
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `);
// });
