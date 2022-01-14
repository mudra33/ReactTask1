import './Card.css';

function Card(props) {
	return (
		<div className='card-wrapper'>
			<section className='pricing py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-4'>
							<div className='card mb-5 mb-lg-0'>
								<div className='card-body'>
									<h5 className='card-title text-muted text-uppercase text-center'>
										{props.free}
									</h5>
									<h6 className='card-price text-center'>
										${props.dollar}
										<span className='period'>/month</span>
									</h6>
									<hr></hr>
									<ul className='fa-ul'>
										<li>
											<span className='fa-li'>
												<i className='fas fa-check'></i>
											</span>
											{props.user == 'Single User' ? (
												props.user
											) : (
												<b>{props.user}</b>
											)}
										</li>
										<li>
											<span className='fa-li'>
												<i className='fas fa-check'></i>
											</span>
											{props.storage}
										</li>
										<li>
											<span className='fa-li'>
												<i className='fas fa-check'></i>
											</span>
											Unlimited Public Projects
										</li>
										<li>
											<span className='fa-li'>
												<i className='fas fa-check'></i>
											</span>
											Community Access
										</li>
										{props.user == 'Single User' ? (
											<li className='text-muted'>
												<span className='fa-li'>
													<i className='fas fa-times'></i>
												</span>
												Unlimited Private Projects
											</li>
										) : (
											<li>
												<span className='fa-li'>
													<i className='fas fa-times'></i>
												</span>
												Unlimited Private Projects
											</li>
										)}
										{props.user == 'Single User' ? (
											<li className='text-muted'>
												<span className='fa-li'>
													<i className='fas fa-times'></i>
												</span>
												{props.subdomain}
											</li>
										) : props.user == '5 Users' ? (
											<li>
												<span className='fa-li'>
													<i className='fas fa-times'></i>
												</span>
												{props.subdomain}
											</li>
										) : (
											<li>
												<span className='fa-li'>
													<i className='fas fa-times'></i>
												</span>
												<b>Unlimited</b> {props.subdomain}
											</li>
										)}
										{props.user == 'Unlimited Users' ? (
											<li>
												<span className='fa-li'>
													<i className='fas fa-times'></i>
												</span>
												Monthly Status Reports
											</li>
										) : (
											<li className='text-muted'>
												<span className='fa-li'>
													<i className='fas fa-times'></i>
												</span>
												Monthly Status Reports
											</li>
										)}
									</ul>
									<div className='d-grid'>
										<a href='#' className='btn btn-primary text-uppercase'>
											Button
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
export default Card;
