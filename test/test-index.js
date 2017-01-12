import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Board from '../js/components/board';
import List from '../js/components/list';
import Card from '../js/components/card';

describe('List component', function() {
	it('renders the list component', function() {
		const list = {
			title: "Some title",
			cards: ['Card 1', 'Card 2']
		};

		const renderer = TestUtils.createRenderer();
		renderer.render(<List title={list.title} cards={list.cards} />);
		const result = renderer.getRenderOutput();
		console.log(result);
		result.type.should.equal('div');
		result.props.className.should.equal('list');
		result.props.children.length.should.equal(list.cards.length);
	})
})

describe('Card component', function() {
	it('Renders the card component', function() {
		const cards = [ { text: 'Card 1' }, { text: 'Card 2' }];

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card text={cards[0].text} /> );
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
		result.type.should.equal('div');
		result.props.children.should.equal(cards[0].text);
	})
})
