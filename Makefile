SRC_DIR := ./src
INCLUDE_DIR := ./include
IN := test-helpers.js $(wildcard $(SRC_DIR)/*.js)

OUT := midi-test-suite.js

COMPILER := macnjs

all: $(OUT)

$(OUT): $(IN)
	$(COMPILER) -I $(INCLUDE_DIR) $^ > $@

clean:
	rm -rf $(OUT)

.PHONY: all clean
