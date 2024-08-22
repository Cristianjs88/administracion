import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  Image,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  IoWaterOutline,
  IoReorderThreeOutline,
  IoWarningOutline,
} from "react-icons/io5";
import {
  BsCameraVideoFill,
  BsFillCalendarDateFill,
  BsSearch,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { RiFireFill } from "react-icons/ri";
import { AiOutlineSetting } from "react-icons/ai";

const Dashboard = () => {
  const primaryColor = useColorModeValue("gray.800", "white");
  const secondaryColor = useColorModeValue("white", "gray.800");

  return (
    <Flex h="100vh" bg="#a0e9c5">
      <Box w="50px" bg={primaryColor} p={4} color={secondaryColor}>
        <Stack spacing={8} align="center">
          <Icon as={RiFireFill} boxSize={6} />
          <Icon as={IoReorderThreeOutline} boxSize={6} />
          <Icon as={AiOutlineSetting} boxSize={6} />
        </Stack>
      </Box>

      <Grid templateColumns="1fr 2fr" gap={4} p={4} w="calc(100% - 50px)">
        {/* Columna Izquierda */}
        <GridItem>
          <Stack spacing={4}>
            {/* Tarjeta de Clima */}
            <Box
              bg={primaryColor}
              color={secondaryColor}
              p={4}
              borderRadius="lg"
            >
              <Text fontSize="sm" mb={2}>
                Martes 14 de Mayo de 2024
              </Text>
              <Flex alignItems="center">
                <Heading size="2xl" mr={4}>
                  15°
                </Heading>
                <Icon as={IoWaterOutline} boxSize={8} mr={4} />
                <Text fontSize="lg" fontWeight="bold">
                  40%
                </Text>
                <Text fontSize="lg" ml={2} mr={4}>
                  35km
                </Text>
                <Icon as={IoWarningOutline} boxSize={6} />
              </Flex>
              <Text fontSize="sm" mt={2}>
                Parcialmente nublado
              </Text>
            </Box>

            {/* Mapa */}
            <Box
              bg={primaryColor}
              color={secondaryColor}
              p={4}
              borderRadius="lg"
              position="relative"
              h="600px" // Ajusta la altura del mapa aquí
            >
              <Text fontSize="md" fontWeight="bold" mb={2}>
                Las Araucarias
              </Text>
              {/* Reemplaza con tu componente de mapa */}
              <Box bg="gray.400" w="100%" h="100%" borderRadius="md"></Box>

              {/* Controles del mapa */}
              <Box position="absolute" top={16} right={16}>
                {/* ... tus controles de mapa ... */}
              </Box>
              <Flex
                justify="space-between"
                align="center"
                mt={2}
                color={secondaryColor}
              >
                <Button size="sm" variant="outline">
                  Radar
                </Button>
                <Button size="sm" variant="outline">
                  Satélite
                </Button>
                <Button size="sm" variant="outline">
                  Lluvia
                </Button>
                <Button size="sm" variant="outline">
                  Temperatura
                </Button>
                <Button size="sm" variant="outline">
                  Viento
                </Button>
                <Button size="sm" variant="outline">
                  Nubes
                </Button>
              </Flex>
            </Box>

            {/* Historial de Riesgo */}
            <Box
              bg={primaryColor}
              color={secondaryColor}
              p={4}
              borderRadius="lg"
            >
              <Flex justify="space-between" align="center" mb={4}>
                <Heading size="md">Historial de riesgo</Heading>
                <Button
                  leftIcon={<BsFillCalendarDateFill />}
                  variant="outline"
                  size="sm"
                >
                  Fecha
                </Button>
              </Flex>
              {/* Reemplaza con tu componente de gráfico */}
              <Box bg="gray.400" w="100%" h="200px" borderRadius="md"></Box>
              <Text fontSize="sm" mt={2} textAlign="center">
                Aumento notable de eventos de riesgo desde marzo 2024
              </Text>
            </Box>
          </Stack>
        </GridItem>

        {/* Columna Derecha */}
        <GridItem>
          <Grid templateRows="auto 1fr 1fr" gap={4}>
            {/* Resumen de Alertas */}
            <GridItem>
              <Flex>
                <Box
                  bg={primaryColor}
                  color={secondaryColor}
                  p={4}
                  borderRadius="lg"
                  w="100%"
                  mr={4}
                >
                  <Heading size="md" mb={4}>
                    Resumen de alertas
                  </Heading>
                  <AlertCard
                    type="humo"
                    location="Pichilemu, Zona 1"
                    camera="Cámara 1 zona sur 4"
                    time="10:11 am"
                    risk="20%"
                    riskLevel="Riesgo bajo"
                  />
                  <AlertCard
                    type="movimiento"
                    location="Pichilemu, Zona 1"
                    camera="Cámara 1 zona sur 4"
                    time="10:11 am"
                    risk="45%"
                    riskLevel="Riesgo medio"
                  />
                  <AlertCard
                    type="humo"
                    location="Pichilemu, Zona 1"
                    camera="Cámara 1 zona sur 4"
                    time="10:11 am"
                    risk="90%"
                    riskLevel="Riesgo alto"
                  />
                </Box>
                <Box
                  bg="#f04e4c"
                  color={secondaryColor}
                  p={4}
                  borderRadius="lg"
                  w="300px"
                  textAlign="right"
                >
                  <Text fontSize="xs">Usuario Maestro</Text>
                  <Heading size="md" mb={4}>
                    Alerta de incendio
                  </Heading>
                  <Text fontSize="sm">
                    <Icon as={BsCameraVideoFill} boxSize={4} mr={2} />
                    Cámara 1 zona norte 2
                  </Text>
                  <Text fontSize="sm" fontWeight="bold">
                    Aeródromo Peldehue
                  </Text>
                  <Text fontSize="xs">
                    -33.11606126821251, -70.7286643958156
                  </Text>
                  <Button
                    mt={4}
                    colorScheme="whiteAlpha"
                    variant="outline"
                    size="sm"
                  >
                    Revisar evento
                  </Button>
                </Box>
              </Flex>
            </GridItem>

            {/* Vista de Cámara */}
            <GridItem>
              <Box
                bg={primaryColor}
                color={secondaryColor}
                p={4}
                borderRadius="lg"
                h="100%"
              >
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Camara norte 2
                </Text>
                {/* Reemplaza con tu componente de vista de cámara */}
                <Box bg="gray.400" w="100%" h="400px" borderRadius="md"></Box>
                <Flex justify="space-between" mt={4}>
                  <Button size="sm" variant="outline">
                    Revisar grabación
                  </Button>
                  <Button colorScheme="green" size="sm">
                    Reportar
                  </Button>
                </Flex>
              </Box>
            </GridItem>

            {/* Cámaras Disponibles & Historial de Alertas */}
            <GridItem>
              <Grid templateColumns="1fr 1fr" gap={4}>
                {/* Cámaras Disponibles */}
                <GridItem>
                  <Box
                    bg={primaryColor}
                    color={secondaryColor}
                    p={4}
                    borderRadius="lg"
                    h="100%"
                  >
                    <Heading size="md" mb={4}>
                      Cámaras disponibles
                    </Heading>
                    <AvailableCameraCard
                      name="Cámara norte 1"
                      location="Las Araucarias"
                      risk="20%"
                      riskLevel="Riesgo bajo"
                    />
                    <AvailableCameraCard
                      name="Cámara norte 2"
                      location="Las Araucarias"
                      risk="90%"
                      riskLevel="Riesgo alto"
                    />
                    <AvailableCameraCard
                      name="Cámara sur 1"
                      location="Las Araucarias"
                      risk="0%"
                      riskLevel="No disponible"
                    />
                    <AvailableCameraCard
                      name="Cámara este 1"
                      location="Las Araucarias"
                      risk="20%"
                      riskLevel="Riesgo bajo"
                    />
                  </Box>
                </GridItem>

                {/* Historial de Alertas */}
                <GridItem>
                  <Box
                    bg={primaryColor}
                    color={secondaryColor}
                    p={4}
                    borderRadius="lg"
                    h="100%"
                  >
                    <Heading size="md" mb={4}>
                      Historial de alertas
                    </Heading>
                    <Flex mb={4} align="center">
                      <Input placeholder="Buscar..." size="sm" />
                      <IconButton
                        aria-label="Buscar"
                        icon={<BsSearch />}
                        size="sm"
                        ml={2}
                      />
                    </Flex>
                    <AlertHistoryItem
                      type="humo"
                      date="05/05/24"
                      time="10:11 am"
                      camera="Cámara 1 zona sur 4"
                      location="Pichilemu, Zona 1"
                      riskLevel="Riesgo bajo"
                      status="Falso positivo"
                    />
                    <AlertHistoryItem
                      type="incendio"
                      date="06/05/24"
                      time="12:11 pm"
                      camera="Cámara 2 zona norte 3"
                      location="Las Araucarias"
                      riskLevel="Riesgo alto"
                      status="Fuego controlado"
                    />
                    <AlertHistoryItem
                      type="movimiento"
                      date="05/05/24"
                      time="10:11 am"
                      camera="Cámara 1 zona sur 4"
                      location="Pichilemu, Zona 1"
                      riskLevel="Riesgo medio"
                      status="Desconocido"
                    />
                    <AlertHistoryItem
                      type="humo"
                      date="05/05/24"
                      time="10:11 am"
                      camera="Cámara 1 zona sur 4"
                      location="Pichilemu, Zona 1"
                      riskLevel="Riesgo bajo"
                      status="Falso positivo"
                    />
                    <Flex justify="space-between" mt={4} align="center">
                      <IconButton
                        aria-label="Atrás"
                        icon={<MdOutlineArrowBackIosNew />}
                        size="sm"
                      />
                      <IconButton
                        aria-label="Adelante"
                        icon={<MdOutlineArrowForwardIos />}
                        size="sm"
                      />
                    </Flex>
                  </Box>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Flex>
  );
};

const AlertCard = ({ type, location, camera, time, risk, riskLevel }) => {
  const iconMap = {
    humo: IoWarningOutline,
    movimiento: BsCameraVideoFill,
  };

  const IconComponent = iconMap[type] || IoWarningOutline;

  return (
    <Box
      mb={2}
      p={3}
      borderRadius="md"
      bg={
        riskLevel === "Riesgo alto"
          ? "#f04e4c"
          : riskLevel === "Riesgo medio"
          ? "#ecc94b"
          : "#48bb78"
      }
    >
      <Flex justify="space-between" align="center">
        <Icon as={IconComponent} boxSize={4} mr={2} />
        <Text fontSize="sm" color="white">
          {time}
        </Text>
      </Flex>
      <Text fontSize="xs" color="white">
        {camera}
      </Text>
      <Text fontSize="sm" fontWeight="bold" color="white">
        {location}
      </Text>
      <Text fontSize="xs" color="white">
        {risk} {riskLevel}
      </Text>
    </Box>
  );
};

const AvailableCameraCard = ({ name, location, risk, riskLevel }) => {
  return (
    <Box
      mb={2}
      p={3}
      borderRadius="md"
      bg={
        riskLevel === "Riesgo alto"
          ? "#f04e4c"
          : riskLevel === "Riesgo medio"
          ? "#ecc94b"
          : riskLevel === "Riesgo bajo"
          ? "#48bb78"
          : "#a0aec0"
      }
      color="white"
    >
      <Flex justify="space-between" align="center">
        <Text fontSize="sm">{name}</Text>
        <Text fontSize="xs">{risk}</Text>
      </Flex>
      <Text fontSize="xs">{location}</Text>
      <Text fontSize="xs">{riskLevel}</Text>
    </Box>
  );
};

const AlertHistoryItem = ({
  type,
  date,
  time,
  camera,
  location,
  riskLevel,
  status,
}) => {
  const iconMap = {
    humo: IoWarningOutline,
    incendio: RiFireFill,
    movimiento: BsCameraVideoFill,
  };

  const IconComponent = iconMap[type] || IoWarningOutline;

  return (
    <Box
      p={3}
      borderBottom="1px"
      borderColor="gray.600"
      _last={{ borderBottom: "none" }}
    >
      <Grid templateColumns="1fr 2fr 1fr" gap={2}>
        <GridItem>
          <Icon as={IconComponent} boxSize={5} /> {/* Icono */}
        </GridItem>
        <GridItem>
          <Text fontSize="xs">{date}</Text> {/* Fecha */}
          <Text fontSize="xs" fontWeight="bold">
            {time}
          </Text>{" "}
          {/* Hora */}
          <Text fontSize="xs">{camera}</Text> {/* Cámara */}
          <Text fontSize="xs">{location}</Text> {/* Ubicación */}
        </GridItem>
        <GridItem>
          <Text fontSize="xs">{riskLevel}</Text> {/* Nivel de riesgo */}
          <Text fontSize="xs">{status}</Text> {/* Estado */}
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
