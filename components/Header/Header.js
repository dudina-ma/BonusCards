import React from "react";
import './Header.less';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function Header() {
	return (
		<div>
			<Nav pills>
				<NavItem>
					<NavLink
						active
						href="#"
					>
						Карты
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#">
						Чеки
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	)
};