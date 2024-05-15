const Notification = (props) => {
	return (
		<section className={`.notification .${props.status}`}>
			<h2>{props.title}</h2>
			<p>{props.message}</p>
		</section>
	);
};

export default Notification;
