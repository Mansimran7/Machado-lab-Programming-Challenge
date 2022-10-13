--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-10-12 23:04:31

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 16417)
-- Name: farms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.farms (
    id integer NOT NULL,
    address text,
    city text,
    name text,
    postal_code text,
    premid text,
    state text,
    latitude double precision,
    longitude double precision
);


ALTER TABLE public.farms OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16416)
-- Name: Farms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.farms ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Farms_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 16402)
-- Name: movement; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.movement (
    id numeric NOT NULL,
    account_company text,
    new_movement_reason text,
    new_species text,
    new_origin_premid text,
    new_destination_premid text,
    new_num_of_item_moved numeric,
    new_shipment_start_date date
);


ALTER TABLE public.movement OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16395)
-- Name: populations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.populations (
    id numeric NOT NULL,
    premiseid text,
    total_animal numeric
);


ALTER TABLE public.populations OWNER TO postgres;

--
-- TOC entry 3177 (class 2606 OID 16423)
-- Name: farms Farms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.farms
    ADD CONSTRAINT "Farms_pkey" PRIMARY KEY (id);


--
-- TOC entry 3175 (class 2606 OID 16408)
-- Name: movement movement_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.movement
    ADD CONSTRAINT movement_pkey PRIMARY KEY (id);


--
-- TOC entry 3173 (class 2606 OID 16401)
-- Name: populations populations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.populations
    ADD CONSTRAINT populations_pkey PRIMARY KEY (id);


-- Completed on 2022-10-12 23:04:38

--
-- PostgreSQL database dump complete
--

