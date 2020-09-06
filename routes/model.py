#!/usr/bin/python
# -*- coding: utf-8 -*-
red = [{'mapValue': {'fields': {'id': {'integerValue': '6'}, 'value': {'doubleValue': 0.999999}}}}, {'mapValue': {'fields': {'id': {'integerValue': '4'}, 'value': {'doubleValue': 0.999999}}}}, {'mapValue': {'fields': {'id': {'integerValue': '3'}, 'value': {'doubleValue': 1e-06}}}},
       {'mapValue': {'fields': {'id': {'integerValue': '5'}, 'value': {'doubleValue': 1e-06}}}}, {'mapValue': {'fields': {'id': {'integerValue': '0'}, 'value': {'doubleValue': 0.5}}}}, {'mapValue': {'fields': {'id': {'integerValue': '1'}, 'value': {'doubleValue': 0.5}}}}]

for ele in red:
    print(ele['mapValue']['fields']['id']['integerValue'])
    print(ele['mapValue']['fields']['value']['doubleValue'])
