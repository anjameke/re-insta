import { useQuery } from "@apollo/react-hooks";
import React from "react";
import { withRouter } from "react-router";
import { Container, Row, Col, Button } from "react-bootstrap";
import { gql } from "apollo-boost";
import { useAuth0 } from "../auth/react-auth0-wrapper";
import { Link } from "react-router-dom";
import Follow from "./Follow.js";

