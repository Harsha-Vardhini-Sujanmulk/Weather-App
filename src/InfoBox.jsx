/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
	const INIT_URL =
		"https://media.istockphoto.com/id/1135335888/photo/bad-air-with-pm-2-5-dust-in-the-atmosphere-in-the-city.webp?b=1&s=170667a&w=0&k=20&c=bNsLV5S3r2oco7BDMP9naEMPM9lwIigTe_1jX_fNMzM=";
	const HOT_URL =
		"https://media.istockphoto.com/id/1205289672/photo/majestic-bright-sunrise-over-ocean.jpg?s=612x612&w=0&k=20&c=sG7YEXKCLRu0Rn5FpIEgbefuKkeNO1wuV634C9ZMyuU=";
	const COLD_URL =
		"https://media.istockphoto.com/id/621939246/photo/winter-landscape.jpg?s=612x612&w=0&k=20&c=OhgZQ4244CK913iDP4hPv7tSWkldzV3HkwMEMcMI0sg=";
	const RAIN_URL =
		"https://media.istockphoto.com/id/1159381533/photo/driving-around-mumbais-famous-marine-drive-during-rainy-season.jpg?s=612x612&w=0&k=20&c=JXqPO8fJHq4ni8cEVC0PdXvbwp3a-6ERfISnijQvoQM=";
	return (
		<div className="InfoBox">
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia
					sx={{ height: 140 }}
					image={
						info.humidity > 80 ? RAIN_URL : info.temp > 25 ? HOT_URL : COLD_URL
					}
					title="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{info.city} &nbsp;
						{info.humidity > 80 ? (
							<ThunderstormIcon />
						) : info.temp > 15 ? (
							<WbSunnyIcon />
						) : (
							<AcUnitIcon />
						)}
					</Typography>
					<Typography variant="body2" color="text.secondary" component={"span"}>
						<p>Temperature = {info.temp}&deg;C</p>
						<p>Humidity = {info.humidity}%</p>
						<p>Min Temperature = {info.tempMin}&deg;C</p>
						<p>Max Temperature = {info.tempMax}&deg;C</p>
						<p>
							The weather can be described as{" "}
							<b>
								<i>{info.weather}</i>
							</b>{" "}
							and feels like {info.feelsLike}&deg;C
						</p>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
