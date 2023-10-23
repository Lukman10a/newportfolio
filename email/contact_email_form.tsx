"use client";

import React from "react";
import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactEmailFormProps = {
  message: String;
  senderEmail: String;
};

export default function ContactEmailForm({
  message,
  senderEmail,
}: ContactEmailFormProps) {
  return (
    <Html>
      <Preview>New message from portfolio</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>You received this message from the contact form</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
