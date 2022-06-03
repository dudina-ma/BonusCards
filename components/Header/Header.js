import React from "react";
import './Header.less';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default function Header() {
	return (
		<div className="navigation">
			<Nav pills>
				<NavItem>
					<NavLink
						tag={RRNavLink}
						to="/"
						activeClassName="active"
					>
						Карты
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						tag={RRNavLink}
						to="/receipts"
						activeClassName="active"
					>
						Чеки
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	)
};