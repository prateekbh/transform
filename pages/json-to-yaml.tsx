import ConversionPanel from "@components/ConversionPanel";
import { useCallback } from "react";
import * as React from "react";
import { stringify } from "yaml";

export default function() {
  const transformer = useCallback(({ value }) => {
    return stringify(JSON.parse(value));
  }, []);

  return (
    <ConversionPanel
      transformer={transformer}
      editorTitle="JSON"
      editorLanguage="json"
      resultTitle="YAML"
      resultLanguage={"yaml"}
    />
  );
}
