const onChatStart = async (ctx: any): Promise<void> => ctx.reply("Hello there")
const onMessage = async (ctx: any): Promise<void> => ctx.reply(ctx.message)
const onUserJoinedGroup = async (ctx: any): Promise<void> => ctx.reply("Welcome")
const onUserLeftGroup = async (ctx: any): Promise<void> => ctx.reply("Goodbye")

export {
  onChatStart,
  onMessage,
  onUserJoinedGroup,
  onUserLeftGroup
}
