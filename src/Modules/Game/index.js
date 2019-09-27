import serverDisconnecting from "./messages/serverDisconnecting";
import CharactersListMessage from "./messages/CharactersListMessage";
import HelloGameMessage from "./messages/HelloGameMessage";
import TrustStatusMessage from "./messages/TrustStatusMessage";
import CharacterSelectedSuccessMessage from "./messages/CharacterSelectedSuccessMessage";
import SequenceNumberRequestMessage from "./messages/SequenceNumberRequestMessage";
import BasicLatencyStatsRequestMessage from "./messages/BasicLatencyStatsRequestMessage";
import kpiStartSessionMessage from "./messages/kpiStartSessionMessage";
import CurrentMapMessage from "./messages/CurrentMapMessage";
import MapComplementaryInformationsDataMessage from "./messages/MapComplementaryInformationsDataMessage";
import GameContextCreateMessage from "./messages/GameContextCreateMessage";

const Game = [
	serverDisconnecting,
	CharactersListMessage,
	HelloGameMessage,
	TrustStatusMessage,
	CharacterSelectedSuccessMessage,
	SequenceNumberRequestMessage,
	BasicLatencyStatsRequestMessage,
	kpiStartSessionMessage,
	CurrentMapMessage,
	MapComplementaryInformationsDataMessage,
	GameContextCreateMessage
];

export default Game;
