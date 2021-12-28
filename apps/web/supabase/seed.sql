--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1 (Debian 14.1-1.pgdg110+1)
-- Dumped by pg_dump version 14.1

-- Started on 2021-12-27 23:56:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3472 (class 0 OID 16522)
-- Dependencies: 229
-- Data for Name: titles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.titles VALUES (1, '2021-12-16 20:05:00+00', 'foo');


--
-- TOC entry 3476 (class 0 OID 16534)
-- Dependencies: 233
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.users VALUES ('feb45b87-af1f-4c52-aad9-0c3172d325fd', '2021-12-16 18:16:48+00', 'foo@example.com', 1);
INSERT INTO public.users VALUES ('1cb11d17-e2f9-4cb4-8ebc-4308965fc026', '2021-12-21 15:29:48+00', 'bar@example.com', 1);


--
-- TOC entry 3466 (class 0 OID 16500)
-- Dependencies: 223
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.addresses VALUES (1, '2021-12-28 01:56:12+00', '123 4th St', '1cb11d17-e2f9-4cb4-8ebc-4308965fc026');


--
-- TOC entry 3468 (class 0 OID 16507)
-- Dependencies: 225
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.posts VALUES (2, '2021-12-17 03:35:44+00', 'bar', NULL, 'feb45b87-af1f-4c52-aad9-0c3172d325fd');
INSERT INTO public.posts VALUES (1, '2021-12-15 14:25:19+00', 'foo', NULL, 'feb45b87-af1f-4c52-aad9-0c3172d325fd');
INSERT INTO public.posts VALUES (4, '2021-12-20 04:38:18.203644+00', 'baz', NULL, 'feb45b87-af1f-4c52-aad9-0c3172d325fd');
INSERT INTO public.posts VALUES (10, '2021-12-21 15:32:12+00', 'foobar', NULL, '1cb11d17-e2f9-4cb4-8ebc-4308965fc026');


--
-- TOC entry 3470 (class 0 OID 16515)
-- Dependencies: 227
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.roles VALUES (1, '2021-12-16 19:13:57+00', 'admin');


--
-- TOC entry 3474 (class 0 OID 16529)
-- Dependencies: 231
-- Data for Name: user_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.user_roles VALUES (1, '2021-12-16 19:22:32+00', 'feb45b87-af1f-4c52-aad9-0c3172d325fd', 1);
INSERT INTO public.user_roles VALUES (2, '2021-12-21 15:31:59+00', '1cb11d17-e2f9-4cb4-8ebc-4308965fc026', 1);


--
-- TOC entry 3482 (class 0 OID 0)
-- Dependencies: 224
-- Name: addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.addresses_id_seq', 1, true);


--
-- TOC entry 3483 (class 0 OID 0)
-- Dependencies: 226
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.posts_id_seq', 13, true);


--
-- TOC entry 3484 (class 0 OID 0)
-- Dependencies: 228
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, true);


--
-- TOC entry 3485 (class 0 OID 0)
-- Dependencies: 230
-- Name: titles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.titles_id_seq', 1, true);


--
-- TOC entry 3486 (class 0 OID 0)
-- Dependencies: 232
-- Name: user_roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_roles_id_seq', 2, true);


-- Completed on 2021-12-27 23:56:50

--
-- PostgreSQL database dump complete
--

