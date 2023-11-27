import React from "react";
import { VStack, Spinner } from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchCompanies } from "./Constant/url";

export function SearchResultList(props) {
  const [result, setResult] = React.useState([]);
  const [company, setCompany] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  //value send to modelDetails

  const fetchHander = (value) => {
    fetch(SearchCompanies)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        const result = data.filter((item) => {
          return (
            value &&
            item &&
            item.name &&
            item.name.toLowerCase().includes(value)
          );
        });
        setResult(result);
        setLoading(false);
      });
  };
  const handleChange = (value) => {
    setLoading(true);
    setCompany(value);
    fetchHander(value.toLowerCase());
  };

  function handleFetch(value) {
    props.fetch(value);
  }
  return (
    <>
      <InputGroup
        borderRadius={5}
        width={{ base: "100%", md: "100%", lg: "70%" }}
      >
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          focusBorderColor="red.300"
          value={company}
          type="text"
          w="100%"
          border="1px solid #949494"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search Company, Model or Type"
          _placeholder={{ opacity: 1, color: "gray.500" }}
        />
        <InputRightElement
          pointerEvents="none"
          children={loading && <Spinner size="lg" color="red.400" />}
        />
      </InputGroup>

      <VStack direction="row" p={0}>
        {result.map((results) => {
          return (
            <>
              <Link
                key={results.id}
                to="/models"
                onClick={() => handleFetch(results.id)}
              >
                {!loading && results.company_name}
              </Link>
            </>
          );
        })}
      </VStack>
    </>
  );
}
