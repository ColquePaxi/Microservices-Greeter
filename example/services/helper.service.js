module.exports = {
    name: "helper",

    // Vamos ouvir um evento emitido pelo greeter.hello
    events: {
        "hello.called" (payload) {
            // Vamos mostrar no LOG
            this.logger.info("Helper service pegou um evento");
            this.logger.info(payload);
        }
    }
};