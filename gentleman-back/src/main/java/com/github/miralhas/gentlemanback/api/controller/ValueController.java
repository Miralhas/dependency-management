package com.github.miralhas.gentlemanback.api.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/value")
public class ValueController {
	@GetMapping
	public Map<String, Integer> getValue() {
		return Map.of("value", 5000);
	}
}
