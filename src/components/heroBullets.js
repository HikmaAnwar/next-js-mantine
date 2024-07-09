import { Container, Title, Button, Group, Text, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

export function HeroBullets() {
  return (
    <Container size="md" className="mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="text-center">
          <Title className="text-4xl font-bold">
            A <span className="text-indigo-600">modern</span> React <br /> components library
          </Title>
          <Text className="text-gray-600 mt-4">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text>

          <ul className="mt-8 space-y-2">
            <li className="flex items-center">
              <ThemeIcon size={20} radius="xl" className="bg-indigo-600 text-white mr-2">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
              <b>TypeScript based</b> – build type safe applications, all components and hooks
              export types
            </li>
            <li className="flex items-center">
              <ThemeIcon size={20} radius="xl" className="bg-indigo-600 text-white mr-2">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
              <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
              any project
            </li>
            <li className="flex items-center">
              <ThemeIcon size={20} radius="xl" className="bg-indigo-600 text-white mr-2">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
              <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
              keyboard
            </li>
          </ul>

          <Group className="mt-8">
            <Button radius="xl" size="md" className="bg-indigo-600 text-white hover:bg-indigo-700">
              Get started
            </Button>
            <Button variant="default" radius="xl" size="md" className="border border-gray-300 text-gray-700 hover:bg-gray-100">
              Source code
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
