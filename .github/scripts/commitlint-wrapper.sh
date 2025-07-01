COMMIT_MSG_FILE=$1

RESULT=$(npx commitlint --edit "$COMMIT_MSG_FILE" 2>&1)
STATUS=$?

if [ $STATUS -ne 0 ]; then
  echo ""
  echo "❌ 커밋 메시지 규칙 위반!"
  echo "------------------------------"
  echo "✅ 올바른 형식: feat: 로그인 기능 구현"
  echo "현재 메시지: $(head -n1 $COMMIT_MSG_FILE)"
  echo "------------------------------"
  exit $STATUS
fi