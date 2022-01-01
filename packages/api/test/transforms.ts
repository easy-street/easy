import { fetcher } from "./lib/fetcher";
import qs from "qs";

const { OBJECT_HEADER, REST_URL } = process.env;

// import { AbortController } from 'node-abort-controller'

test("order", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $sort: {
        username: -1,
      },
    })}`
  );
  expect(res).toMatchSnapshot();
});

test("order on multiple columns", async () => {
  const res = await fetcher(
    `${REST_URL}/messages?${qs.stringify({
      $sort: {
        channel_id: -1,
        username: -1,
      },
    })}`
  );
  expect(res).toMatchSnapshot();
});

test("limit", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $limit: 1,
    })}`
  );
  expect(res).toMatchSnapshot();
});

test("range", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $limit: 3,
      $skip: 1,
    })}`
  );
  expect(res).toMatchSnapshot();
});

test("single", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({
      $limit: 1,
    })}`,
    {
      headers: {
        Accept: OBJECT_HEADER,
      },
    }
  );
  expect(res).toMatchSnapshot();
});

test("single on insert", async () => {
  const res = await fetcher(`${REST_URL}/users`, {
    body: JSON.stringify({ username: "foo" }),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });

  expect(res).toMatchSnapshot();

  await fetcher(`${REST_URL}/users?username=foo`, {
    headers: {
      Accept: OBJECT_HEADER,
    },
    method: "DELETE",
  });
});

// test('maybeSingle', async () => {
//   const res = await postgrest.from('users').select().eq('username', 'goldstein').maybeSingle()
//   expect(res).toMatchSnapshot()
// })

test("select on insert", async () => {
  const res = await fetcher(
    `${REST_URL}/users?${qs.stringify({ $select: ["status"] })}`,
    {
      body: JSON.stringify({ username: "foo" }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }
  );
  expect(res).toMatchSnapshot();

  await fetcher(`${REST_URL}/users?username=foo`, {
    headers: {
      Accept: OBJECT_HEADER,
    },
    method: "DELETE",
  });
});

// test('select on rpc', async () => {
//   const res = await postgrest
//     .rpc('get_username_and_status', { name_param: 'supabot' })
//     .select('status')
//   expect(res).toMatchSnapshot()
// })

// test('csv', async () => {
//   const res = await postgrest.from('users').select().csv()
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": "username,data,age_range,status,catchphrase
//     supabot,,\\"[1,2)\\",ONLINE,\\"'cat' 'fat'\\"
//     kiwicopple,,\\"[25,35)\\",OFFLINE,\\"'bat' 'cat'\\"
//     awailas,,\\"[25,35)\\",ONLINE,\\"'bat' 'rat'\\"
//     dragarcia,,\\"[20,30)\\",ONLINE,\\"'fat' 'rat'\\"",
//       "count": null,
//       "data": "username,data,age_range,status,catchphrase
//     supabot,,\\"[1,2)\\",ONLINE,\\"'cat' 'fat'\\"
//     kiwicopple,,\\"[25,35)\\",OFFLINE,\\"'bat' 'cat'\\"
//     awailas,,\\"[25,35)\\",ONLINE,\\"'bat' 'rat'\\"
//     dragarcia,,\\"[20,30)\\",ONLINE,\\"'fat' 'rat'\\"",
//       "error": null,
//       "status": 200,
//       "statusText": "OK",
//     }
//   `)
// })

// test('abort signal', async () => {
//   const ac = new AbortController()
//   ac.abort()
//   const res = await postgrest.from('users').select().abortSignal(ac.signal)
//   expect(res).toMatchInlineSnapshot(`
//     Object {
//       "body": null,
//       "count": null,
//       "data": null,
//       "error": Object {
//         "code": "",
//         "details": "",
//         "hint": "",
//         "message": "FetchError: The user aborted a request.",
//       },
//       "status": 400,
//       "statusText": "Bad Request",
//     }
//   `)
// })
